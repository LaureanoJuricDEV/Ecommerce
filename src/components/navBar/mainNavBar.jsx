import { Link } from "react-router-dom"
const MainNavBar = ()=>{
    return(
        <div className="containerMain">
            <ul>
            <Link to={`/`}><li>INICIO</li> </Link>
            <Link to={`/categoria/remeras`}><li>REMERAS</li> </Link>
            <Link to={`/categoria/buzos`}><li>BUZOS</li> </Link>
            <Link to={`/categoria/pantalones`}><li>PANTALONES</li> </Link>
            </ul>
        </div>
    )
}

export default MainNavBar   