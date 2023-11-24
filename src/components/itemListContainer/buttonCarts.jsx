import { useContext, useState } from "react"
import { ShopContext } from "../cartContext/cartContext";

const ButtonCarts =()=>{

  const {numero, setNumero}= useContext(ShopContext)
  
    const [valor, setValor]= useState(0)
        
    const sumar =()=>{
        setValor(valor+1)
        setNumero(numero+1)
    }
    
    const restar =()=>{
        valor> 0 &&  setValor(valor-1)
        numero>0 && setNumero(numero-1)
      }
  

    return(
       
      <div className="buttonCounterContainer">
        <p>Cantidad</p>
        <button onClick={restar}>-</button>
        <p className="buttonCounter">{valor}</p>
        <button onClick={sumar}>+</button>
      </div>

      
    
    )
     
}
export default ButtonCarts
