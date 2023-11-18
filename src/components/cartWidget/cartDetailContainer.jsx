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




    return(
     <>
        {productsNew.map((products,index)=>{
        const cantidadTotal=1
        
        
        
        
        return(

            <div key={index}>
                <p>------</p>
                <p>TITULO:{productsNew[index].items[0].tittle}</p>
                <p>PRECIO:{productsNew[index].items[0].price}</p>
                <p>CANTIDAD: {cantidadTotal}</p>
            </div>
        )
        
    })}

     </>
     
     
    )
}
export default CartDetailContainer