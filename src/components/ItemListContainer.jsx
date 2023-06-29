import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState ([]) ; 
    const {id} = useParams();

   
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "productos");
        const q = id ? query (itemsCollection, where("categoria","==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0 ) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            } else {
                console.error("No se encontraron productos!")
            }
        });
    }, [id]);

    /*useEffect(() => {
        const db = getFirestore ();
        const itemsCollection = collection(db, "productos");

        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

    },[]);*/

    return(
        <div className="container my-5">
            <div className="row">
                <ItemList productos={items}/>
                
            </div>
        </div>
    )
}



export default ItemListContainer; 
