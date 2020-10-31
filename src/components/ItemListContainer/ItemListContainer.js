import React, {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList/ItemList';

const getItems = () => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res([ 1, 2, 3, 4]);
        }, 2000);
    });
}

function ItemListContainer({title}){
    const [items, setItems] = useState();

    useEffect( () => {
        console.log('Inicializada item container');
        getItems().then( items => {
            setItems(items);
        })
    }, []);
    
    return  <>
    <div className="container">
        <h5 className="text-center font-weight-normal">{title}</h5>
        <ItemList items={items[1, 2, 3, 4]}/>
    </div>
</>
}

export default ItemListContainer;