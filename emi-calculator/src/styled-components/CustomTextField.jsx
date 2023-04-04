const { styled, TextField } = require("@mui/material");


export const CustomTextField = styled(TextField)({
    "& .MuiInputBase-input":{
        width:'100px',
        height:'30px',
        padding:'5px 10px',
        fontWeight:'bold',
        color:'#ABAD48',
        fontSize:'20px'
    }
})


