import { Box } from "@mui/material";
import React from "react";
import PriceViewComponent from "./PriceViewComponent";

const ViewContainer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"350px"}
      justifyContent={"space-between"}
      border={"2px solid grey"}
      padding={"20px"}
    >
      <PriceViewComponent value = {9999999} title ={'Emi Ammount'}/>
      <PriceViewComponent value = {9999999} title ={'Total Interest Ammount'}/>
      <PriceViewComponent value = {9999999} title ={'Total Payable Ammount'}/>
    </Box>
  );
};

export default ViewContainer;
