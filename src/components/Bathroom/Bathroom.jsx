import React, { useState, useEffect } from 'react';
import { useQuery} from 'react-apollo';
// import { Link } from 'react-router-dom';
import './Bathroom.css';
import gql from 'graphql-tag';
import EditPage from '../../pages/EditPage/EditPage';

const GET_BATHROOM = gql`
query getBathroom($bathroomId: ID!) {
  getBathroom(bathroomId: $bathroomId) {
    businessName
    description
    address
    genderNeutral
    category
    changingStations
    purchaseRequired
    accessibleStall
    singleOccupancy
    lat
    lng
    postedBy {
      id
    }
    reviews {
      id
      title
      description
      createdBy {
        name
      }
    }
  }
}
`

const Bathroom = props => {
const [ editSelected, setEditSelected] = useState(false)
const { loading, error, data } = useQuery(GET_BATHROOM, { fetchPolicy: 'no-cache', variables: { bathroomId: props.match.params.id } });

const [ bathroom, setBathroom ] = useState({})

useEffect(() => {
  setBathroom(data)
}, [])

if(loading) return <div>Loading...</div>
if(error) return <div>{error.message}</div>


  return ( 
    <div className="container bathroom-container">
      <div className='table-container'> 

        <div onClick={() => {setEditSelected(!editSelected)}} className="btn edit-button">EDIT</div>


      {/* 
          // refactor to Routes
      <Link className="btn" to={`/bathroom/edit/${props.match.params.id}`}>EDIT</Link> */}

      {editSelected ? <EditPage data={data} /> : 

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
              <tr>
                <td>{data.getBathroom.businessName}</td>
                <td>{data.getBathroom.address}</td>
                <td>{data.getBathroom.description}</td>
                <td>{data.getBathroom.genderNeutral}</td>
                <td>{data.getBathroom.category}</td>
                <td>{`${data.getBathroom.lat}, ${data.getBathroom.lng}`}</td>
                <td>{data.changingStations ? 'True' : 'False'}</td>
                <td>{data.purchaseRequired ? 'True' : 'False'}</td>
                <td>{data.accessibleStall  ? 'True' : 'False'}</td>
                <td>{data.singleOccupancy  ? 'True' : 'False'}</td>
              </tr>
            </tbody>
          </table>
        }

        {editSelected ? <div onClick={()=> {console.log('DELETED')}} className='btn delete-button'>DELETE</div> : null }

      </div>
    </div>
   );
}
 
export default Bathroom;
