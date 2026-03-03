import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials! Use: user@example.com / password123");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully! Please Sign In.");
    setIsSignUp(false); 
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setIsSignUp(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-page-container">
        <header className="login-header">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            className="login-logo" 
            alt="Netflix Logo" 
          />
        </header>
        <div className="login-body">
          <div className="login-form-card">
            <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
            <form onSubmit={isSignUp ? handleSignUpSubmit : handleLogin}>
              <div className="input-box">
                <input 
                  type="email" 
                  placeholder="Email or phone number" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="input-box">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              {isSignUp && (
                <div className="input-box">
                  <input type="password" placeholder="Confirm Password" required />
                </div>
              )}
              <button type="submit" className="login-submit-btn">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              
              {!isSignUp && (
                <div className="login-help">
                  <div className="remember-me">
                    <input type="checkbox" id="reg" />
                    <label htmlFor="reg">Remember me</label>
                  </div>
                  <span>Need help?</span>
                </div>
              )}
            </form>

            <div className="login-footer-text">
              {isSignUp ? (
                <p>Already have an account? <span className="white-text" onClick={() => setIsSignUp(false)}>Sign in now.</span></p>
              ) : (
                <p>New to Netflix? <span className="white-text" onClick={() => setIsSignUp(true)}>Sign up now.</span></p>
              )}
              <p className="recaptcha-text">
                This page is protected by Google reCAPTCHA. 
                <span className="blue-link"> Learn more.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-root">
      <nav className={`nav-header ${isScrolled ? "nav-bg-black" : ""}`}>
        <div className="nav-left">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            className="nav-logo" 
            alt="Netflix Logo" 
          />
          <ul className="nav-links">
            <li>Home</li><li>TV Shows</li><li>Movies</li><li>New & Popular</li><li>My List</li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="nav-icon-btn">🔍</button>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      </nav>

      <header className="hero-billboard">
        <div className="hero-content">
          <h1 className="hero-title">STRANGER THINGS</h1>
          <div className="hero-meta">
            <span className="match-score">98% Match</span>
            <span className="year">2022</span>
            <span className="maturity">16+</span>
            <span className="seasons">4 Seasons</span>
          </div>
          <p className="hero-description">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, 
            terrifying supernatural forces and one strange little girl.
          </p>
          <div className="hero-btns">
            <button className="btn-play">▶ Play</button>
            <button className="btn-info">ⓘ More Info</button>
          </div>
        </div>
      </header>

      <section className="movie-row-container">
        <h2 className="row-title">Trending Now</h2>
        <div className="movie-grid">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="movie-card">
              <img 
                src="https://image.tmdb.org/t/p/w500/8W99vY7VpXU69u6f39TM69D676S.jpg" 
                className="poster-img" 
                alt="Poster" 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;