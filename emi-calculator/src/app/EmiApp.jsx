import { Box, Divider } from '@mui/material'
import React from 'react'
import PriceInputContainer from '../components/PriceInputContainer'
import PriceViewComponent from '../components/PriceViewComponent'
import ViewContainer from '../components/ViewContainer'

const EmiApp = () => {
  return (
    <Box display={'flex'} flexDirection={'row'}paddingLeft={'100px'} paddingTop={'100px'} gap={5} >
       <PriceInputContainer />
       {/* <Divider orientation='vertical'  flexItem/> */}
       <ViewContainer />
    </Box>
  )
}

export default EmiApp