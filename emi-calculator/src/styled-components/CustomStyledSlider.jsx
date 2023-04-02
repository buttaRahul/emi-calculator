import { Slider, styled } from "@mui/material";

export const CustomStyledSlider = styled(Slider)(
  {
    "& .MuiSlider-mark":{
      height: '20px',
      top: '29px',
      // bgColor:'black',
      backgroundColor:'black',
    },

    '& .MuiSlider-markLabel':{
      top:'52px'
    }
  }
)
