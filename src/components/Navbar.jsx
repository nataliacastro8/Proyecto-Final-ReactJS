import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav">
            <NavLink className="nav-link text-dark fs-2" to="/category/dulce">Tienda Dulce</NavLink>
            <NavLink className="nav-link text-dark fs-2" to="/category/salado">Tienda Salado</NavLink>
            <NavLink className="nav-link text-dark fs-2" to="#">Ubicacion</NavLink>
        </nav>
    )
}

export default Navbar; 