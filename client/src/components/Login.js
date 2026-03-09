import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid credentials! Use admin@gmail.com and 1234");
    }
  };

  return (
    <div className="login-screen">
      <div className="login-nav">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
          alt="Netflix Logo" 
          className="login-logo"
        />
      </div>
      <div className="login-container">
        <div className="login-form-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email or phone number" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit" className="login-submit-btn">Sign In</button>
          </form>
          <div className="login-help">
            <p>New to Netflix? <span>Sign up now.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;