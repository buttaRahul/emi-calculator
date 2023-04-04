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
    },
    "& .MuiSlider-rail":{
      backgroundColor:"#ABAD48"
    },
    "& .MuiSlider-track":{
      backgroundColor:"#ABAD48"
    },

    "& .MuiSlider-thumb":{
      backgroundColor:'#ABAD48',
      borderRadius: '0%',
      border:'2px solid darkgreen',
      boxShadow:'none',
    }
  }
)
