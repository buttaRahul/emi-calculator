import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PriceInputContainer from "../components/PriceInputContainer";
import ViewContainer from "../components/ViewContainer";
import EMIContextProvider from "../data/EMIContextProvider";

const EmiApp = () => {
  const [values, setValues] = useState({ ammount: 0, rate: 0, tenure: 0 });
  const updateValues = (name, value) => {
    setValues((pv) => ({ ...pv, [name]: value }));
  };
  return (
    <Box display={'flex'} flexDirection={'column'}>
    <Typography variant="h2" textAlign={'center'} color={'green'} paddingTop={'10px'}  paddingRight={'500px'}>Home Loan Emi Calculator</Typography>
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
        <ViewContainer values={values} />
      </EMIContextProvider>
    </Box>
    </Box>
  );
};

export default EmiApp;
