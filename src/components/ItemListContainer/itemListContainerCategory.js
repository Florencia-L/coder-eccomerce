import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../../firebase';
import { useParams } from "react-router-dom";

function ItemListContainerCategory(){
    let [items, setItems] = useState([]);
    const {categoryId} = useParams();
    console.log(categoryId);


    useEffect( () => {
        const db = getFirestore();
        const itemCollection = db.collection("items").where('categoryId', '==', categoryId);

        itemCollection.get().then( (querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results');
            }

            setItems( querySnapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }) ) );
        });
    }, [categoryId]);
    
    return <div className="container mt-4">
        <ItemList items={items}/>
    </div>

}

export default ItemListContainerCategory;