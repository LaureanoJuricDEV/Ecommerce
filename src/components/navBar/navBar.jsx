import './styleNavBar.css'
import MainNavBar from './mainNavBar.JSX'
import CartWidget from '../cartWidget/cartWidgtet'
const NavBar=()=>{
    return(
        <div className='containerNavBar'>
            <MainNavBar></MainNavBar>
            <CartWidget/>
        </div>
    )
}

export default NavBar