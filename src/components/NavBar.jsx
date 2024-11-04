import '../index.css'
import { Link } from "react-router-dom"
function NavBar(){
    return(
        <nav className='nav' >
            <Link to={"/"} ><h4>Home</h4></Link>
            <Link to={"/data"} ><h4>Data</h4></Link>
            <Link to={"/cart"} ><h4>Cart</h4></Link>

        </nav>
    )
}
export default NavBar