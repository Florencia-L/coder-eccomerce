import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import calza from '../../assets/images/producto.jpg';
import { getFirestore } from '../../firebase'

let products = [{id:1,title:'Calza deportiva Scout', price:1250, urlImg: calza },
                {id:2,title:'Calza deportiva PowerShot', price:1380, urlImg: calza },
                {id:3,title:'Calza Minimal training', price:1150, urlImg: calza },
                {id:4,title:'Calza Max Effort', price:1420, urlImg: calza }]

//const getItems = () => {
//    return new Promise( (res, rej) => {
//        setTimeout( () => {
//            res(products);
//        }, 2000);
//    });
//}

function ItemListContainer({title}){
    let [items, setItems] = useState([]);

    useEffect( () => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const pricedItems = itemCollection.where('price', '>', 500);

        itemCollection.get().then( (querySnapshot) => {

            setItems( querySnapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ) );

        });

        //console.log('Inicializada item container');
        //getItems().then( res => {
        //    setItems(res);
        //})
    }, []);
    
    return  <>
    <div className="container mt-5">
        <h5 className="text-center font-weight-normal">{title}</h5>
        <ItemList items={items}/>
    </div>
</>
}

export default ItemListContainer;