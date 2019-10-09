import React from 'react';
import './Navbar.css'

const Navbar = (props) => {

  const handleClick = (event) => {
    console.log('Client Logged Out')
  }

  return ( 
    <div className='navbar'>
      <h5 className='admin-title'>Gotta Go Admin</h5>
      <div className='logout' onClick={handleClick}>Logout</div>
    </div>
   );
}
 
export default Navbar;