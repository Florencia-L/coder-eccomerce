import React, {useEffect, useState} from 'react';
import calza from '../../assets/images/producto.jpg';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

let products = [
    {id:1, title:'Calza deportiva Scout', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1250, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:2, title:'Calza deportiva PowerShot', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1380, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:3, title:'Calza Minimal training', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1150, urlImg: calza, stock:5, categoryId:'mujer' },

    {id:4, title:'Calza Max Effort', description: "Estas calzas de running para mujer están confeccionadas en tejido Speedwick con inserciones de malla para repeler el sudor y brindarte la transpirabilidad que necesitás. Encontrá tu ajuste ideal con el cordón regulable de la cintura, y mantené tus artículos esenciales a mano gracias a su pequeño bolsillo. Sus detalles reflectantes te mantienen visible en condiciones de poca luz.", price:1420, urlImg: calza, stock:5, categoryId:'mujer' }
]

const getItems = (idemId) => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res(products.find( product => product.id) ); //res(products.find( product => product.id === idemId ) );
        }, 1000);
    });
}

function ItemDetailContainer() {
    let [item, setItem] = useState([]);
    const {id} = useParams();
    console.log(id);

    useEffect( () => {
        console.log('Inicializada item container');
        getItems(id).then( res => setItem(res) );
    }, [id]);

    console.log(item);  //lo levanta como undefined

    return (<>
                <div className="container mt-5 pt-5">
                    {item && <ItemDetail item={item} />}
                </div>
            </>)
}


export default ItemDetailContainer;