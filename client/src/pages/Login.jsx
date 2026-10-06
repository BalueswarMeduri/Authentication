import React, { useState } from 'react'
import '../App.css'


const Login = () => {
  // State to track whether to show Login (true) or Register (false)
  const [isLogin, setIsLogin] = useState(true);
  
  // States for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email, password });
      // Add your login API call here
    } else {
      console.log('Registering with:', { name, email, password });
      // Add your registration API call here
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Toggle Headers */}
        <div className="auth-toggle">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Title */}
        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Dynamically show Name input only for Registration */}
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="John Doe"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="••••••••"
            />
          </div>

          {isLogin && (
            <div className="form-actions">
              <a href="#forgot" className="forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Footer Toggle Link */}
        <p className="auth-footer">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="switch-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login