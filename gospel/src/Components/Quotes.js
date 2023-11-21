import React, { useState } from 'react';
import Nav from './Nav';
import './Quotes.css';
import data from './Data';



function Quotes() {
  const [dataa,setData]=useState(data);
  return (

    <>
    <Nav />
    <div className='container-fluid bg-secondary' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
    <div className='text'>
      {data.map((values)=>{
        const {title,text}=values;
        return(
          <>
          <h5>{title}
        <p>{text}</p>
        </h5>
          
          </>
        )
      })}
      </div>
    </div>
    </>
    
  )}

  export default Quotes;