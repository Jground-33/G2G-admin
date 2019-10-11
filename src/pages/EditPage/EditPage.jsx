import React, { useState } from 'react';
import './EditPage.css';

const EditPage = ({data}) => {

const [ formState , setFormState] = useState({})
  

  return ( 
    <div className="container">
      <div className='table-container'>

        <div className="row">
          <form className="col s12">
            
            <div className="row">
              <div className="input-field col s6">
                <div>
                  <label for="business_name">Business Name</label>
                </div>
                  <input id="business_name" type="text" value={data.getBathroom.businessName} ></input>
              </div>
              <div className="input-field col s6">
                <div>
                  <label for="address">Address</label>
                </div>
                  <input id="address" type="text" value={data.getBathroom.address} />
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div>
                <label for="description">Description</label>
                </div>
                <textarea className="text-area" value={data.getBathroom.description} id="description" type="text"/>
              </div>
            </div>

            <div className="row">
              <div class="input-field col s6">
                <label>Gender Neutral
                  <select 
                  className="red"
                  value={data.getBathroom.genderNeutral} 
                  onChange={() => {console.log('Gender Neutral Changed')}}>
                    <option value={data.getBathroom.genderNeutral} >Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
              </div>            

              <div class="input-field col s6">
                <label> Category
                  <select 
                  className="red"
                  value={data.getBathroom.category} 
                  onChange={() => {console.log('Gender Neutral Changed')}}>
                    <option value={data.getBathroom.genderNeutral} >Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="row">

                <div className="input-field col s6">
                  <div>
                    <label for="latitude">Latitude</label>
                  </div>
                    <input id="latitude" type="text" value={data.getBathroom.lat} ></input>
                </div>

                <div className="input-field col s6">
                  <div>
                    <label for="longitude">Longitude</label>
                  </div>
                    <input id="longitude" type="text" value={data.getBathroom.lng} />
                </div>
            </div>
            
            <div className="row">
              <div className="input-field col s6">
                <div className="switch bool-switch">
                  Changing Stations <br/>
                  <label>
                    Off
                    <input type="checkbox" />
                    <span className="lever"></span>
                    On
                  </label>
                </div>
              </div>

              <div className="input-field col s6">
                <div className="switch bool-switch">
                  Purchase Required <br/>
                  <label>
                    Off
                    <input type="checkbox" />
                    <span className="lever"></span>
                    On
                  </label>
                </div>
              </div>
            </div>

            <div className="rom">
              <div className="input-field col s6">
                  <div className="switch bool-switch">
                  Accessible Stall <br/>
                    <label>
                      Off
                      <input type="checkbox" />
                      <span className="lever"></span>
                      On
                    </label>
                  </div>
                </div>

                <div className="input-field col s6">
                  <div className="switch bool-switch">
                    Single Occupancy <br/>
                    <label>
                      Off
                      <input type="checkbox" />
                      <span className="lever"></span>
                      On
                    </label>
                  </div>
                </div>
            </div>

            <div className="row">
              <input className="btn update-button" type="submit" value="UPDATE"/> 
            </div>

            <div className="row">
            </div>

          </form>
        </div>

      </div>
    </div>
   );
}
 
export default EditPage;