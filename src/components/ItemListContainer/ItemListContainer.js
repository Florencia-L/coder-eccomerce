import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../../firebase';

function ItemListContainer({title}){
    let [items, setItems] = useState([]);

    useEffect( () => {
        const db = getFirestore();
        const itemCollection = db.collection("items");

        itemCollection.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results');
            }

            setItems( querySnapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ) );
        });
    }, []);
    
    return <div className="container mt-4">
        <ItemList items={items}/>
    </div>

}

export default ItemListContainer;