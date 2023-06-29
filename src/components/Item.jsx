import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return(
        <div className="col-md-4 my-3">
            <div className="card">
                <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                    <img src={producto.img} className="card-img-top" alt={producto.nombreProducto}/>
                    <div className="card-body">
                        <h3>{producto.nombreProducto}</h3>
                        <p className="card-text">{producto.descripcion}</p>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </Link>
            </div>   
        </div>
    )
}

export default Item;