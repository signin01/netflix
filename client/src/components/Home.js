import React from "react";

const MOVIES = [
  { id: 1, title: 'Wednesday', img: 'https://image.tmdb.org/t/p/w500/9PFonB9REmbi0OH61f9oSRT0XAL.jpg' },
  { id: 2, title: 'The Witcher', img: 'https://image.tmdb.org/t/p/w500/7vSGP0Z9uI0vH6u979pZpYv9ZpY.jpg' },
  { id: 3, title: 'Squid Game', img: 'https://image.tmdb.org/t/p/w500/8W99vY7VpXU69u6f39TM69D676S.jpg' },
  { id: 4, title: 'Money Heist', img: 'https://image.tmdb.org/t/p/w500/reksS76I0hE650Wv5zS20T8p94X.jpg' },
  { id: 5, title: 'Lucifer', img: 'https://image.tmdb.org/t/p/w500/ekYqS98VY9p8Xre76U9A208YI0x.jpg' },
  { id: 6, title: 'Cobra Kai', img: 'https://image.tmdb.org/t/p/w500/7L996T96Y8Y4YvK39X9pY8v4W5.jpg' }
];

function Home() {
  return (
    <div className="home-screen">
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
          <p className="hero-desc">When a young boy vanishes, a small town uncovers a mystery involving supernatural forces.</p>
          <div className="hero-buttons">
            <button className="play-btn">▶ Play</button>
            <button className="info-btn">ⓘ More Info</button>
          </div>
        </div>
      </header>

      <div className="movie-section">
        <h2 className="section-title">Trending Now</h2>
        <div className="movie-row">
          {MOVIES.map(movie => (
            <div key={movie.id} className="movie-card">
              {/* Note: I added a fallback 'onError' just in case a specific link ever breaks */}
              <img 
                src={movie.img} 
                alt={movie.title} 
                className="movie-img" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/200x300?text=Movie"; }} 
              />
              <div className="movie-overlay"><p>{movie.title}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;