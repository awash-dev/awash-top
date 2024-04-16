import React from "react";
import Navbar from "../main/navbar/Navbar";
import Slider from "../main/slider/Slider";
import Text from "../main/text/Text";
import Grid from "../main/grid/Grid";
import Footer from "../main/footer/Footer";
import Promotion from "../main/promotion/Promotion";

const MAIn = () => {
  return (
    <div>
      <Navbar /> 
      <Slider />
      <Text />
      <Grid />
      <Promotion/>
      <Footer/>
    </div>
  );
};

export default MAIn;
