import { useContext } from "react";
import {CartContext} from "./context/CartContext";
import tacho from "./img/trash3.svg"

const Cart = () => {
    const {cart, removeItem, clear, productosCarrito, sumaCarrito} = useContext(CartContext);

    if(productosCarrito() === 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center alert alert-danger" role="alert">
                        No hay productos en el carrito!
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                    <tr>
                        <td colSpan={4}>&nbsp;</td>
                        <td className="text-end"><button className="btn btn-light" onClick={() => {clear()}} title = "Vaciar Carrito">Vaciar Carrito</button></td>

                    </tr>
                    {
                        cart.map(item => (
                            <tr>
                                <td><img src={item.img} alt={item.nombreProducto} width={120} /></td>
                                <td>{item.nombreProducto}</td>
                                <td>{item.quantity} X {item.precio} </td>
                                <td>${item.quantity * item.precio} </td>
                                <td className="text-end"><button className="btn btn-light" onClick={() => {removeItem(item.id)}}><img src={tacho} alt="Eliminar producto" width={40}/></button></td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={3}>Total a Pagar </td>
                        <td>${sumaCarrito()}</td>

                    </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;