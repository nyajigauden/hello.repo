import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [view, setView] = useState('login'); // 'login', 'forgotPassword', 'createNewPassword', 'register'

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
    // Implement login logic here
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password for email:', email);
    // Implement forgot password logic here
  };

  const handleCreateNewPassword = (e) => {
    e.preventDefault();
    console.log('Create new password for email:', email);
    // Implement create new password logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering new student', { firstName, lastName, email, age, course });
    // Implement registration logic here
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Student Management</h1>
      </div>
      <div className="login-form">
        {view === 'forgotPassword' ? (
          <div className="forgot-password-section">
            <h2>Forgot Password</h2>
            <p>Please enter your email to reset your password.</p>
            <form onSubmit={handleForgotPassword}>
              <div className="input-group">
                <label htmlFor="forgot-email">Email</label>
                <input
                  type="email"
                  id="forgot-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="forgot-password-button">Reset Password</button>
              <button type="button" className="back-button" onClick={() => setView('login')}>Back to Login</button>
            </form>
          </div>
        ) : view === 'createNewPassword' ? (
          <div className="create-new-password-section">
            <h2>Create New Password</h2>
            <p>Please enter your email and new password.</p>
            <form onSubmit={handleCreateNewPassword}>
              <div className="input-group">
                <label htmlFor="create-email">Email</label>
                <input
                  type="email"
                  id="create-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <button type="submit" className="create-new-password-button">Create Password</button>
              <button type="button" className="back-button" onClick={() => setView('login')}>Back to Login</button>
            </form>
          </div>
        ) : view === 'register' ? (
          <div className="register-section">
            <h2>Register</h2>
            <p>Please fill in the details to register a new student.</p>
            <form onSubmit={handleRegister}>
              <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
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
                  placeholder="Enter your age"
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
                  placeholder="Enter your course"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="register-password">Password</label>
                <input
                  type="password"
                  id="register-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="register-button">Register</button>
              <button type="button" className="back-button" onClick={() => setView('login')}>Back to Login</button>
            </form>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="login-email">Email or phone number</label>
              <input
                type="text"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or phone number"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="login-button">Log In</button>
            <div className="login-footer">
              <button type="button" className="forgot-password" onClick={() => setView('forgotPassword')}>Forgot password?</button>
              <button type="button" className="create-new-password" onClick={() => setView('createNewPassword')}>Create new password</button>
              <button type="button" className="register" onClick={() => setView('register')}>Register</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
