import React from "react";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg)"
      }}
    >
      <div className="banner-content">
        <h1>Stranger Things</h1>

        <div className="banner-buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>

        <p>
          When a young boy vanishes, a small town uncovers mystery involving
          secret experiments and supernatural forces.
        </p>
      </div>

      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;