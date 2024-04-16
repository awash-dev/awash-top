import React from "react";
import "./Text.css";
const Text = () => {
  return (
    <>
      <div className="text-gaming">
        <div className="text-game">
          <h1>Popular games</h1>
        </div>
        <div className="text-share">
          <span>
            Follow MHM codder on Facebook for more deals{" "}
            
          </span><a href="">
              <img src="/farebook.png" alt="" />
            </a>
        </div>
      </div>
    </>
  );
};

export default Text;
