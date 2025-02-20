import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const RocketLaunches = () => {
  
  const[data,setdata]=useState([])

  useEffect(()=>{
    fetch("https://api.spacexdata.com/v3/rockets")
    .then(res=>res.json())
    .then(data=>setdata(data));
   
    
  },[])
  return (
    <div>
      <Container>
      <h1>API Integration</h1>
        { data.map((rocket , index)=>(
          <div className="card">
         <h1>{rocket.company}</h1>
          <p>{rocket.rocket_name}</p>
          <p>{rocket.description}</p> 
        </div>
        )
        
      )

        }
        <Button onClick={() => window.location.reload()} variant="primary" style={{justifyContent:'center'}}>Refresh</Button>
        </Container>
        
    </div>
  )
}

export default RocketLaunches