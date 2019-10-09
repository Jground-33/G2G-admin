import React, { Component } from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main'
// import { Login } from '../Login/Login';

class App extends Component {
  state = {
    userId: 'user Logged in'   //userService.getUser(),
  }
  render() {
    return (
      <div className="App">
        {this.state.userId ? (
          <>
          <Navbar/> 
          <Main/>
          </>
        ): 'You Are Not Logged In'}
      </div>
    );
  }
}

export default App;
