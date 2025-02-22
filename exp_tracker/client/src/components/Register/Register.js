import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here, e.g., send data to a backend API
    console.log('Registration submitted:', { name, email, password });

    // Redirect to the login page after registration
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="nav-bar">
        <ul>
          {/* Uncomment if you want to include navigation links */}
          {/* <li><a href="/register">Register</a></li> */}
          {/* <li><a href="/login">Login</a></li> */}
        </ul>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;