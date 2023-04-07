import { Box } from '@mui/material'
import React from 'react'
import PriceInputComponent from './PriceInputComponent'
import { priceMarkings, rateMarkings, tenureMarkings } from '../data/markings'

const PriceInputContainer = ({updateValues}) => {
  return (
    <Box width={'700px'} display={'flex'} flexDirection={'column'} gap={5} padding={'20px'}>
        <PriceInputComponent markings = {priceMarkings} title={'House Loan Amount'} cf = {100000} updateValues={updateValues} name = 'ammount' symbol = '₹'/>
        <PriceInputComponent markings={tenureMarkings} title={'Loan Tenure'} updateValues={updateValues} name = 'tenure' symbol = 'Y'/>
        <PriceInputComponent markings={rateMarkings} title={'Interest Rate'} updateValues={updateValues} name = 'rate' symbol = '%'/>

    </Box>
  )
}

export default PriceInputContainer