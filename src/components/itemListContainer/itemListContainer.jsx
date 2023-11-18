import Carrusel from "./carrusel"
import './styleItems.css'
import FilterProducts from "./filterProducts"

const ItemListContainer = ({ titulo }) => {
    
    return (
        <div>
            <div className="containerTitle">
                <h2>{titulo}</h2>
            </div>

            <div className='containerCarrusel'>
                <Carrusel />
            </div>
            
            <div className="containerCartsProducts">
                <FilterProducts/>   
            </div>
        </div>
    )
}
export default ItemListContainer