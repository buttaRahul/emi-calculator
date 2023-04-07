import React, { useContext } from "react";

import { CustomStyledSlider } from "../styled-components/CustomStyledSlider";
import { EMIContext } from "../data/EMIContextProvider";

const PriceSlider = ({ markings, name, cf }) => {
  const { values, updateValues } = useContext(EMIContext);
  const value = values[name] / cf;
  const handleChange = (e) => {
    updateValues(name, e.target.value * cf);
  };
  return (
    <CustomStyledSlider
      marks={markings}
      min={markings[0].value}
      max={markings[markings.length - 1].value}
      value={parseInt(value)}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};

export default PriceSlider;

