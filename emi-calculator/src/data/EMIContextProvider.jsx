import { createContext, useState } from "react";

const initialValues = {
  ammount: 0,
  rate: 0,
  tenure: 0,
};

export const EMIContext = createContext();

const EMIContextProvider = ({ children }) => {
  const [values, setValues] = useState(initialValues);
  const updateValues = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <EMIContext.Provider value={{ values, updateValues }}>
      {children}
    </EMIContext.Provider>
  );
};

export default EMIContextProvider;
