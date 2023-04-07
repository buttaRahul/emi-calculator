import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import PriceInputContainer from "../components/PriceInputContainer";
import PriceViewComponent from "../components/PriceViewComponent";
import ViewContainer from "../components/ViewContainer";
import EMIContextProvider from "../data/EMIContextProvider";

const EmiApp = () => {
  const [values, setValues] = useState({ ammount: 0, rate: 0, tenure: 0 });
  console.log("VALS :", values);
  const updateValues = (name, value) => {
    setValues((pv) => ({ ...pv, [name]: value }));
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      paddingLeft={"100px"}
      paddingTop={"100px"}
      gap={5}
    >
      <EMIContextProvider>
        {" "}
        <PriceInputContainer updateValues={updateValues} />
        {/* <Divider orientation='vertical'  flexItem/> */}
        <ViewContainer values={values} />
      </EMIContextProvider>
    </Box>
  );
};

export default EmiApp;
