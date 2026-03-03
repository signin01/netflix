import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
  }
];

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Trending Now" movies={movies} />
    </div>
  );
}

export default Home;