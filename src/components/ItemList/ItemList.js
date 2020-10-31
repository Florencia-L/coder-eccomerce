import React from 'react';
import Item from '../Item/Item'

function ItemList({ items }){


    return items.map( (item) => {<Item key={item}></Item>})
    // <>
    // <div className="row">
    //     <ul>
            
    //     </ul>
    // </div>
    // </>
}

export default ItemList;