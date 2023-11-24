import NavBar from "./components/navBar/navBar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import NotFound from "./components/notfound/notFound"
import Footer from "./components/footer/footer"
import ItemDetailContainer from "./components/itemListContainer/ItemDetailContainer"
import ShopComponentContext from "./components/cartContext/cartContext"
import CartDetailContainer from "./components/cartWidget/cartDetailContainer"


function App() {
  return (
    <>
<ShopComponentContext>   
     <BrowserRouter> 
       <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer titulo={"Aceptamos todos los metodos de pago"}/>}/>
          <Route exact path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/>
          <Route exact path='/products/:productId' element={<ItemDetailContainer/>}/>
          <Route exact path='/cartDetailContainer' element={<CartDetailContainer/>}/> 
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>  
          <Footer/>
     </BrowserRouter>
  </ShopComponentContext>
    </>
  )
}

export default App
