import React from "react";

import { CustomStyledSlider } from "../styled-components/CustomStyledSlider";

const PriceSlider = ({ markings, value , updateFromSlider}) => {
  console.log("value :", value);
  return (
    <CustomStyledSlider
      marks={markings}
      min={markings[0].value}
      max={markings[markings.length - 1].value}
      value={parseInt(value)/100000}
      onChange={(e)=>{updateFromSlider(e.target.value)}}
    />
  );
};

export default PriceSlider;

// sir min and max for each slider differ
