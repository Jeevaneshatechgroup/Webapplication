import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Button, Container } from 'react-bootstrap';  
import Login from './Login';  


function App() {
  return (

    
    <Container style={{backgroundColor:'yellowgreen', borderRadius:'10px',textAlign:'center'}}>
    <Router> 
      <div className="App" style={{marginBottom:'20px'}}>
        <header className="App-header">
          <h1>Welcome to DZTech</h1>
        
          
          
          <Button variant="dark" href="/login">Click to login</Button>
        </header>

        
        <Routes>
         
          <Route path="/" element={
            <div >
              <h2>Home Page</h2>
              <p style={{ marginBottom: '20px' }}>This is the home page of DZTech.</p>
            </div >
          } />

          
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </Container>
  );
}

export default App;
