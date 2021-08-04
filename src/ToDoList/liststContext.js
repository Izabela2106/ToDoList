mport React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import reducer from './listReducer'


const AppContext = React.createContext()

const initailState={
    number:1,
    
}


const AppProvider = ({ children }) => {
    
        const [state,dispatch]=useReducer(reducer,initialState);

    
   
    
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }