import React, {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Item from '../../components/Item/Item';
import calza from '../../assets/images/producto.jpg'

const item1 = () => {
    return <Item id='1' title='Calza deportiva Scout' price={1250} urlImg={calza} />
}
const item2 = () => {
    return <Item id='2' title='Calza deportiva PowerShot' price={1380} urlImg={calza} />
}
const item3 = () => {
    return <Item id='3' title='Calza Minimal training' price={1150} urlImg={calza} />
}
const item4 = () => {
    return <Item id='4' title='Calza Max Effort' price={1420} urlImg={calza} />
}

const getItems = () => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res([ item1, item2, item3, item4]);
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
        <ItemList items={items}/>
    </div>
</>
}

export default ItemListContainer;