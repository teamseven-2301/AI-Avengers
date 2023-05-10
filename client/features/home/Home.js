import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container">
      <div id="home-info">
        <h1>INFINITE DUNGEON</h1>
        <h1>CRAWLER</h1>
        <p>
          Step into a world of adventure with our AI-assisted text adventure
          game. Use your imagination to navigate through a captivating story
          where your decisions matter and every playthrough is unique.
        </p>
        <Link to="/settings" id="home-play-now">
          PLAY NOW
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
