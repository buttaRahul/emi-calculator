import { Box } from "@mui/material";
import React, { useContext } from "react";
import PriceViewComponent from "./PriceViewComponent";
import { EMIContext } from "../data/EMIContextProvider";
// P x R x (1+R)^N / [(1+R)^N-1]
// const calculateEmi = ()=>{

// }

function calculateEmi(P, R, N) {
  let emiAmmount = 0;
  let totalPayableAmmount = 0;
  let totalInterestAmmount = 0;

  if (P === 0 || R === 0 || N === 0)
    return { emiAmmount, totalInterestAmmount, totalPayableAmmount };
  R = R / 12 / 100;
  N = N * 12;
  emiAmmount = (
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1)
  ).toFixed(0);
  // console.log(emiAmmount.toFixed(0))

  // calculating total ammount
  totalPayableAmmount = N * emiAmmount;
  totalInterestAmmount = totalPayableAmmount - P;

  return {
    emiAmmount,
    totalInterestAmmount,
    totalPayableAmmount,
  };
}

// calculateEmi(5000000,10,12)

const ViewContainer = () => {
  // const context = useContext(EMIContext)
  const { values } = useContext(EMIContext);
  const { ammount, rate, tenure } = values;
  console.log("CONTEXT: ", values);
  const { emiAmmount, totalInterestAmmount, totalPayableAmmount } =
    calculateEmi(ammount, rate, tenure);
  // const {emiAmmount,totalInterestAmmount,totalPayableAmmount} = calculateEmi(5000000,10,12)
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"350px"}
      justifyContent={"space-between"}
      border={"2px solid grey"}
      padding={"20px"}
    >
      <PriceViewComponent value={emiAmmount} title={"Emi Ammount"} />
      <PriceViewComponent
        value={totalInterestAmmount}
        title={"Total Interest Ammount"}
      />
      <PriceViewComponent
        value={totalPayableAmmount}
        title={"Total Payable Ammount"}
      />
    </Box>
  );
};

export default ViewContainer;
