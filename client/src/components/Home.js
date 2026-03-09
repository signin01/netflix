import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MOVIES = [
  { id: 1, title: 'Wednesday', img: 'https://image.tmdb.org/t/p/w500/iH909nIaBuiT0Ym0vqy2YSIvYvL.jpg' },
  { id: 2, title: 'The Witcher', img: 'https://image.tmdb.org/t/p/w500/jBv97Cxs9lH797EbLZ9SjxqqmST.jpg' },
  { id: 3, title: 'Squid Game', img: 'https://image.tmdb.org/t/p/w500/69956vY9pUnuUat9vV6pM98A0A8.jpg' },
  { id: 4, title: 'Money Heist', img: 'https://image.tmdb.org/t/p/w500/vHe9699p69Un9vV6pM98A0A8.jpg' },
  { id: 5, title: 'Lucifer', img: 'https://image.tmdb.org/t/p/w500/9699p69Un9vV6pM98A0A8.jpg' },
  { id: 6, title: 'Cobra Kai', img: 'https://image.tmdb.org/t/p/w500/7L996T96Y8Y4YvK39X9pY8v4W5.jpg' }
];

function Home() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setShowNav(true);
      else setShowNav(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-screen">
      <nav className={`main-nav ${showNav ? "nav-black" : ""}`}>
        <div className="nav-left">
          <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
          <ul className="nav-links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="signout-btn" onClick={() => navigate("/")}>Sign Out</button>
        </div>
      </nav>

      <header className="hero-banner">
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1&controls=0&loop=1&playlist=b9EkMc79ZSU" 
            allow="autoplay; encrypted-media" 
            frameBorder="0"
            title="Hero Video"
          ></iframe>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">STRANGER THINGS</h1>
          <p className="hero-desc">When a young boy vanishes, a small town uncovers a mystery involving supernatural forces, secret experiments, and one strange little girl.</p>
          <div className="hero-buttons">
            <button className="play-btn">▶ Play</button>
            <button className="info-btn">ⓘ More Info</button>
          </div>
        </div>
        <div className="hero-fade-bottom"></div>
      </header>

      <div className="movie-section">
        <h2 className="section-title">Trending Now</h2>
        <div className="movie-row">
          {MOVIES.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.img} alt={movie.title} className="movie-img" />
              <div className="movie-card-info">
                <p className="movie-card-title">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;