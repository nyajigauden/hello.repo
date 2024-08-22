import React, { useState } from 'react';
import './Register.css'; // Import CSS file for styling

const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering student', { name, age, email, course });
  };

  return (
    <div className="register-container">
      <h1>Register as a Student</h1>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Course"
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        <button type="button" className="back-button" onClick={() => window.history.back()}>Back to Login</button>
      </form>
    </div>
  );
};

export default Register;
