import React, { Component } from 'react';
import './App.css';
import Main from '../../components/Main/Main';
import userService from '../../services/userService'
import { Route, Switch, Redirect  } from 'react-router-dom';
// import { Login } from '../Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Bathroom from '../../components/Bathroom/Bathroom';
import EditPage from '../EditPage/EditPage';

class App extends Component {
  state = {
    userId:  null //userService.getUser(),
  }

  render() {
    return (
      <div className='App'>
          <Navbar/> 
          <Route exact path='/bathrooms' render={props =>{
            return this.state.userId ?
            'You Are Not Logged In' :
            <Main {...props}/> 
          }}/>
          <Route exact path='/bathroom/:id' render={props => {
            return this.state.userId ?
            'You Are Not Logged In' :
              <Bathroom {...props}/> 
          }}/>

          {/* <Route exact path='/bathroom/:id' render={props => {
            return <EditPage {...props}/>
          }}/> */}

          <Route path='/'> 
             {<Redirect to='/bathrooms' />} 
         </Route>
              
      </div>
    );
  }
}

export default App;
