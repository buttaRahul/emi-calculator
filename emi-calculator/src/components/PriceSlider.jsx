import React from 'react'

import { CustomStyledSlider } from '../styled-components/CustomStyledSlider'

const PriceSlider = ({markings}) => {
  console.log(markings)
  return (
    <CustomStyledSlider marks = {markings} min={markings[0].value} max = {markings[markings.length-1].value}/>
  )
}

export default PriceSlider

// sir min and max for each slider differ