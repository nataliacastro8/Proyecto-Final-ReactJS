import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(); 
    const {id} = useParams();
     

    /*useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout (() => {
                let producto = productos.find (item => item.idx === parseInt (id));
                resolve (producto);
                
            }, 2000);
        })

        promesa.then(data => {
            setItem(data);
        });

    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();
        const productos = doc(db, "productos", id);
        getDoc(productos)
       .then(resultado => {
            setItem({id:resultado.id, ...resultado.data()})
        });       
    }, [id])

    return(
        <div>
           { item ? <ItemDetail producto = {item} /> : ""}
        </div>
    )
}

export default ItemDetailContainer