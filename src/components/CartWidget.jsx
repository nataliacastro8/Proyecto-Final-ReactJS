import { Link } from "react-router-dom";
import cart from "./img/cart-fill.svg"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {productosCarrito} = useContext(CartContext);

    return(
         (productosCarrito() > 0) ? <Link className="btn btn-secondary position-relative m-3" to={"/cart"}>
            <img src={cart} alt="Cart" width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{productosCarrito()}</span>
        </Link> : ""
    )
}

export default CartWidget; 