import { db } from "../../firebase/client"
import {doc, getDoc, getDocs, query, where,addDoc,collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import './styleCart.css'

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


const cantidadTotal=1

    return(
     <div className="containerCartAll">
     <div className="cartDetailTitle">
       <p>Articulo</p>
       <p>Precio</p>
       <p>Cantidad</p>
     </div>
        {productsNew.map((products,index)=>{
                
        
        
        
        return(
            <div key={index}className="cartDetailContainer" >
                <p>{productsNew[index].items[0].tittle}</p>
                <p>${productsNew[index].items[0].price}</p>
                <p>x{cantidadTotal}</p>
            </div>
        
        )
        
    })}

     </div>
     
     
    )
}
export default CartDetailContainer