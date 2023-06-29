import {useEffect, useState} from "react"; 
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(0);
    const [itemStock, setItemStock] = useState(stock); 
    const [itemAgregado, setItemAgregado] = useState(false); 

    const incrementarStock = () => {
        if (items < itemStock){
            setItems (items + 1); 
        }
    }    

    const decrementarStock = () => {
        if (items > 0){
            setItems (items - 1); 
        }
    }

    const addCarrito = () => {
        if (items <= itemStock){
            setItemStock (itemStock - items); 
            setItems(0);
            setItemAgregado (true);
            onAdd(items)
        }
    }

    useEffect(() => {
        setItemStock (stock); 
    }, [stock]);

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-danger" onClick = {decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-danger">{items}</button>
                        <button type="button" className="btn btn-outline-danger" onClick = {incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAgregado ? <Link to={"/cart"} className="btn btn-danger">Finalizar Compra!</Link> : <button type="button" className="btn btn-danger" onClick={addCarrito}>Lo quiero!!</button>}
                </div>
            </div>
        </div>

    )
}

export default ItemCount;