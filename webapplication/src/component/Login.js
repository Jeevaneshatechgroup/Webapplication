import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';  
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] =  useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    if (username === "admin" && password === "password123") {
      setErrorMessage('');
      alert("Login successful!");
     
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>
        <br></br>

        <Button variant="primary" type="submit" style={{ marginBottom: '20px' }}>Login</Button>


        {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
      </Form>
    </div>
  );
}

export default Login;
