import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Freefire from "../submain/Freefire/Freefire";
import Callofduty from "../submain/callofduty/Callofduty";
import Pubg from "../submain/Pubg/Pubg";
import Efootball from "../submain/e-football/E-football";
import MAIn from "./MAIn";
const Abstracter = () => {
  return (
  
      <Router>
       

        <Routes>
          <Route path="/" element={<MAIn />} />
          <Route path="/pubg" element={<Pubg />} />
          <Route path="/freefire" element={<Freefire />} />
          <Route path="/callofduty" element={<Callofduty />} />
          <Route path="/e-football" element={<Efootball />} />{" "}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    
  );
};

export default Abstracter;
