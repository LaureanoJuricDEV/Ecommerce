import { db } from "../../firebase/client"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ButtonCarts from "./buttonCarts"




const FilterProducts =()=>{

    const [products, setProducts] = useState([])
    const {nombreCategoria}= useParams()
    
       
    useEffect(()=>{

        const allProducts = query(
            collection(db,"products")
        )

        const productsFilter = query(
            collection(db,"products"),
               where ("categoryId", "==", `${nombreCategoria}`)
               
        )
           
        
        nombreCategoria== undefined ?
        
         getDocs(allProducts)
         .then(snapshot=>{
            setProducts(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})));
            
        }) 
        :
         getDocs(productsFilter) 
        .then(snapshot=>{
            setProducts(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})));
  
        })
        

    },[nombreCategoria])

    
console.log();

    return(
        <>
           {products.map((products,index)=>{
       
               return(
           
           <div key={index} className="containerCarts">                
               <img className="containerCartsImagen" src={products.image}></img>
               <div className="containerCartsInfo">
                  <p>{products.tittle}</p>
                   <p> <del>${products.price}</del> ${products.price-500}</p>
               </div>
                <div className="containerCartsButton">
                   <Link to={`/products/${products.id}`}><button>Ver más</button></Link>
                </div>
           </div>
        
       )
     })}    
   </>)
}
export default FilterProducts