import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div>
      <h1>Infinite Dungeon Crawler</h1>
      <p>
        Step into a world of adventure with our AI-assisted text adventure game.
        Use your imagination to navigate through a captivating story where your
        decisions matter and every playthrough is unique.
      </p>
      <button className='play-now' /*onClick={handleClick}*/>Play Now</button>
    </div>
  );
};

export default Home;
