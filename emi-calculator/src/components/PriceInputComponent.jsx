import { Box, InputAdornment } from '@mui/material'
import React, { useContext } from 'react'
import PriceSlider from './PriceSlider'
import { CustomTextField } from '../styledComponents/CustomTextField'
import { EMIContext } from '../data/EMIContextProvider'

const PriceInputComponent = ({markings,title,cf = 1,name,symbol}) => {
  
  const {values,updateValues} = useContext(EMIContext)
  const value = values[name]
  const handleInput = (e)=>{
      const v = e.target.value
      updateValues(name,v)
  }
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} >
          <h4>
            {title}
          </h4>
          <CustomTextField onChange={(e)=>{handleInput(e)}} value={value} InputProps={{
              startAdornment: (
                <InputAdornment position="start">{symbol}</InputAdornment>
              ),
            }}/>
          
      </Box>
        <PriceSlider  markings = {markings} name={name} cf={cf} />
    </Box>
  )
}

export default PriceInputComponent