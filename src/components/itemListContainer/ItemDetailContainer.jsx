import { db } from "../../firebase/client"
import {doc, getDoc, getDocs, query, addDoc,collection, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './styleItems.css'
import ButtonCarts from "./buttonCarts"




const ItemDetailContainer=()=>{

    const [productsId, setProductsId]=useState([])
    const {productId}= useParams()



    //COMPONENTE PARA CREAR ORDEN DE COMPRA
       
    
    useEffect(()=>{
     
        const prodRef= doc(db, "products", `${productId}`)

        getDoc(prodRef)
        .then((snapshot)=>{
            setProductsId({id:snapshot.id, ...snapshot.data()});
        })
      

    }, [productId])

    //FUNCION PARA CREAR COLECCIÓN EN FIREBASE 
    const [orders, setOrders]=useState([])

    const order={

        buyer:{
            name:localStorage.getItem("Usuario"),
            phone:localStorage.getItem("Celular"),
            email:localStorage.getItem("Mail")
           },    
        items:[
            {
                categoryId:(productsId.categoryId),
                description:(productsId.description),
                image:"",
                price:(productsId.price),
                stock:(productsId.stock),
                tittle:(productsId.tittle),
            }
            ]
     }
    
     useEffect(()=>{
         
              
        const orderFinally = query(
            collection(db,"order")
        )
    
        getDocs(orderFinally)
             .then(snapshot=>{
                setOrders(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})));
                
            })
                    
        
    
       },[setOrders])

       

       


       

       const crearOrdenDeCompra=()=>{

        const refOrder= collection (db, "order")
        addDoc(refOrder, order).then(({id})=>console.log(id))
        

    }

        


    return(
        <div className="productContainer">

            <div className="productDetailContainer">
                <div className="productImagenContainer">
                  <img src={productsId.image}></img>
                 </div>
                 
                 <div className="productInfoContainer">
                   <h2>{productsId.tittle}</h2>
                   <p>{productsId.description}</p>         
                   <p><del>${productsId.price}</del> ${productsId.price-500} <span>OFERTA</span></p>

                  <div className="productInfoButton">
                    <ButtonCarts/>
                  <button onClick={crearOrdenDeCompra} className="buttonAdd">¡Añadir al carrito!</button>
                  
                 
                  </div>
               </div>
            </div>
        </div>
    )
    

}
    
export default ItemDetailContainer

