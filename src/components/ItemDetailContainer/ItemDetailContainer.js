import React, {useEffect, useState} from 'react';
//import calza from '../../../public/images/producto.jpg';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';

/*let products = [
    {id:1, title:'Calza deportiva Scout', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1250, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:2, title:'Calza deportiva PowerShot', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1380, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:3, title:'Calza Minimal training', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1150, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:4, title:'Calza Max Effort', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1420, urlImg: calza, stock:5, categoryId:'mujer' }
]

const getItems = (idemId) => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res(products.find( product => product.id == idemId ) );
        }, 1000);
    });
}  
---borrar---  */

function ItemDetailContainer() {
    let [item, setItem] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect( () => {
        console.log('Inicializada item container');
        const db = getFirestore();
        const itemCollection = db.collection("items");

        //deberia filtrar por id a los items que coincidan con el params
        //const IdemId = itemCollection.where('id', '==', id); 
        const item = itemCollection.doc(id);

        //getItems(id).then( res => setItem(res) );  ---borrar---

        /*IdemId.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results');
            }

            setItem( querySnapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ) ); 
        });*/

        item.get().then(doc => {
            setItem({ id: doc.id, ...doc.data() });
        }).finally(() => {
            /*cambiar spinner por ej*/
        });
    }, [id]);

    return (<>
                <div className="container mt-5 pt-5">
                    {item && <ItemDetail item={item} />}
                </div>
            </>)
}


export default ItemDetailContainer;