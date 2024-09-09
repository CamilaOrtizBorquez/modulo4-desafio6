import React, { useState, createContext, useContext } from 'react'

export const PizzaContext = createContext() 

const PizzaProvider = ({children}) => {
    const[allPizzas, setAllPizzas] = useState ([]);
    const[countPizzas, setCountPizzas] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <PizzaContext.Provider value = {{allPizzas, setAllPizzas, countPizzas, setCountPizzas, total, setTotal}}>
            {children}
        </PizzaContext.Provider>
  )
}

export const usePizzas=()=>{
    return useContext(PizzaContext);
}

export default PizzaProvider;
