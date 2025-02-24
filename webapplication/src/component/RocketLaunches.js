import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const RocketLaunches = () => {
  const[data,setData]=useState([])
  const [visibleIndex, setVisibleIndex] = useState(null);

  useEffect(()=>{
    fetch("https://api.spacexdata.com/v3/rockets")
    .then(res=>res.json())
    .then(data=>setData(data));
   
    
  },[])
  
  return(
    <Container className="my-5">
      <h1 className="text-center mb-4">API Integration</h1>
      <Row>
        {data.map((Rocket, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm border-light">
              <Card.Body>
                <Card.Title className="text-primary">{Rocket.rocket_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{Rocket.company}</Card.Subtitle>

                <Button 
                  variant="primary" 
                  onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
                >
                  {visibleIndex === index ? 'Hide ' : 'Learn more'}
                </Button>
                {visibleIndex === index && <Card.Text className="mt-3">{Rocket.description}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
}

export default RocketLaunches