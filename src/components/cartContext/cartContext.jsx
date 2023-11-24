import { createContext, useState } from "react";


export const ShopContext = createContext();

const ShopComponentContext = ({children})=>{
    
    const [numero, setNumero]=useState(0)

    const suma =()=>{
      setNumero(numero+1)
    }
    const resta =()=>{
      setNumero(numero-1)
    }

    return(
        <div>
          <ShopContext.Provider value={{numero, setNumero, suma, resta}}>
            {children}
          </ShopContext.Provider>  
        </div>
    )
}

export default ShopComponentContext