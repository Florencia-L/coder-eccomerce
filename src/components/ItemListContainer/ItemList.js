import React from 'react';
import Item from './Item'

function ItemList({ items }){
    return (<>
                <div className="row">
                    {items.map( (item) => {return <Item {...item}></Item>})}
                </div>
            </>)
    // <>
    // <div className="row">
    //     <ul>
    //     </ul>
    // </div>
    // </>
}

export default ItemList;