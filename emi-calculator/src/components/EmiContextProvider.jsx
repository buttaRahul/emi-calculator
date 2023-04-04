import { Box } from '@mui/material'
import React, { createContext, useState } from 'react'
const EMIContext = createContext()
const initialState = {p:0, r: 0,t:0}
const EmiContextProvider = () => {
  const [values, setValues] = useState(initialState)
  const updateValues = ({name,value}) => {
        setValues((v)=>{{...v,[name]:value}})
  }
}

export default EmiContextProvider