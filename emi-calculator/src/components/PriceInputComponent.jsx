import { Box } from '@mui/material'
import React, { useContext } from 'react'
import PriceSlider from './PriceSlider'
import { CustomTextField } from '../styled-components/CustomTextField'
import { EMIContext } from '../data/EMIContextProvider'

const PriceInputComponent = ({markings,title,cf = 1,name}) => {
  
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
          {/* <TextField /> */}
          <CustomTextField onChange={(e)=>{handleInput(e)}} value={value}/>
          
      </Box>
        <PriceSlider  markings = {markings} name={name} cf={cf} />
    </Box>
  )
}

export default PriceInputComponent