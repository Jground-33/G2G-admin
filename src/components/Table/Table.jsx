import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import './Table.css'

const GET_CLOSEST_BATHROOMS = gql`
    query getClosest($currentLat:Float!, $currentLng: Float!) {
      getClosest(currentLat: $currentLat, currentLng: $currentLng) {
        bathrooms {
          id
          businessName
          address
          description
          category
          genderNeutral
          lat
          lng
          changingStations
          purchaseRequired
          accessibleStall
          singleOccupancy
        }
      }
    }
  `

const Table = props => {
  const { loading, error, data } = useQuery(GET_CLOSEST_BATHROOMS, { fetchPolicy: 'no-cache',
    variables: { 
      currentLat: 30.267153, 
      currentLng: -97.743057
    } 
  });
  
  const handleClick = id => {
    props.history.push(`/bathroom/${id}`)
  }

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return ( 
    <div className='table-container'>
      <table className='centered highlight'>
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Address</th>
            <th>Description</th>
            <th>Gender Neutral</th>
            <th>Category</th>
            <th>Latitude, Longitude</th>
            <th>Changing Stations</th>
            <th>Purchase Required</th>
            <th>Accessible Stall</th>
            <th>Single Occupancy</th>
          </tr>
        </thead>

        <tbody>
        {data.getClosest.bathrooms.map(bathroom => {
            return (
              <tr onClick={() => handleClick(bathroom.id)}>
                <td>{bathroom.businessName}</td>
                <td>{bathroom.address}</td>
                <td>{bathroom.description}</td>
                <td>{bathroom.genderNeutral}</td>
                <td>{bathroom.category}</td>
                <td>{`${bathroom.lat}, ${bathroom.lng}`}</td>
                <td>{bathroom.changingStations ? 'True' : 'False'}</td>
                <td>{bathroom.purchaseRequired ? 'True' : 'False'}</td>
                <td>{bathroom.accessibleStall  ? 'True' : 'False'}</td>
                <td>{bathroom.singleOccupancy  ? 'True' : 'False'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
   );
}
 

export default Table;