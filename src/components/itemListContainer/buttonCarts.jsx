import { useContext, useState } from "react"
import { ShopContext } from "../cartContext/cartContext"


const ButtonCarts =()=>{

     const [valor, setValor]= useState(0)
        
     const {numero,setNumero, suma,resta,} =useContext(ShopContext)
     

         
    const sumar =()=>{
        setValor(valor+1)
    }
    
    const restar =()=>{
        valor> 0 &&  setValor(valor-1)
    }
    

    return(
      <div>
        <button onClick={restar}>-</button>
        <button>{valor}</button>
        <button onClick={sumar}>+</button>
        
      </div>
    )
}
export default ButtonCarts
