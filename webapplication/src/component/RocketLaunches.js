import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

const RocketLaunches = () => {
  
  const[data,setData]=useState([])

  useEffect(()=>{
    fetch("https://api.spacexdata.com/v3/rockets")
    .then(res=>res.json())
    .then(data=>setData(data));
   
    
  },[])
  return (
    <div>
      <Container>
        <h1>API Integration</h1>
      {
      data.map((rockets , index)=>(
        <div className='card'>
      <h1>{rockets.company}</h1>
      <p>{rockets.rocket_name}</p>
      <p>{rockets.cost_per_launch}</p>
      <p>{rockets.description}</p>
      </div>
      ))

      }
      </Container>
        
    </div>
  )
}

export default RocketLaunches