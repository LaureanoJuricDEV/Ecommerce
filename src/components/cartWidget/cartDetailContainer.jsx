import { db } from "../../firebase/client"
import { getDocs, query,collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import './styleCart.css'
import FormUser from "./formUser"
const CartDetailContainer=()=>{

const [productsNew, setProductsNew]= useState([])

useEffect(()=>{

    const allProductsNew = query(
        collection(db,"order")
    )
    getDocs(allProductsNew)
         .then(snapshot=>{
            setProductsNew(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})));
            
        })

},setProductsNew)

    return(
     <div className="containerCartAll">
     <div className="cartDetailTitle">
       <p>Articulo</p>
       <p>Precio</p>
       <p>Cantidad</p>
     </div>
     
        {productsNew.map((products,index)=>{
                
        
            
            return(
                <>
            <div key={index}className="cartDetailContainer" >
                <p>{productsNew[index].items[0].tittle}</p>
                <p>${productsNew[index].items[0].price}</p>
                <p>{productsNew[index].items[0].cantidad}</p>
                <p>${productsNew.map(x=>x.items[0].cantidad * x.items[0].price)[index]}</p>
            </div>

        </>
)
})}            
        
        <FormUser/>    
     </div>
     
     
    )
}
export default CartDetailContainer