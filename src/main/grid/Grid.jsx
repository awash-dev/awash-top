import "./Gride.css";

import React from "react";

const Grid = () => {
  return (
    <div className="grid-container " id="news">
      <div className="box-container">
        <img src="/pubg.avif" alt="" className="box-img"/>
        <a href="/pubg" className="box-a">Go</a>
      </div>
      <div className="box-container">
        <img src="/freefire.jpeg" alt="" className="box-img"/>
        <a href="/freefire" className="box-a">Go</a>
      </div>
      <div className="box-container">
        <img src="/callof.jpg" alt="" className="box-img"/>
        <a href="/callofduty" className="box-a">Go</a>
      </div>
      <div className="box-container">
        <img src="/efootball2023.jpg" alt="" className="box-img"/>
        <a href="/e-football" className="box-a">Go</a>
      </div>
    </div>
  );
};

export default Grid;
