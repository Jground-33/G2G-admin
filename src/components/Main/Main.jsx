import React from 'react';
import './Main.css'
import Table from '../Table/Table'


const Main = (props) => {
  return ( 
      <div className="main-container container">
        <Table {...props} />
      </div>
   );
}
 
export default Main;