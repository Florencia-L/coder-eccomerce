import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';

function ItemDetailContainer() {
    let [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);

        item.get().then(doc => {
            setItem({ id: doc.id, ...doc.data() });
        });
    }, [id]);

    return (<>
                <div className="container mt-5 pt-5 pb-5">
                    {item && <ItemDetail item={item} />}
                </div>
            </>)
}


export default ItemDetailContainer;