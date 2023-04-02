import { Box } from '@mui/material'
import React from 'react'
import PriceInputComponent from './PriceInputComponent'
import { priceMarkings, rateMarkings, tenureMarkings } from '../data/markings'

const PriceInputContainer = () => {
    console.log('hehe' ,priceMarkings)
  return (
    <Box width={'700px'} display={'flex'} flexDirection={'column'} gap={5}>
        <PriceInputComponent markings = {priceMarkings}/>
        <PriceInputComponent markings={tenureMarkings}/>
        <PriceInputComponent markings={rateMarkings}/>

    </Box>
  )
}

export default PriceInputContainer