import React, { useRef } from "react";

function Row({ title, movies }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    rowRef.current.scrollLeft += 400;
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-container">
        <button className="arrow left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="row-posters" ref={rowRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row-poster"
              src={movie.img}
              alt={movie.title}
            />
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
}

export default Row;