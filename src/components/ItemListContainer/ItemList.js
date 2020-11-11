import React from 'react';
import Item from './Item'


function ItemList({ items }){
    return (<>
                <div className="row">
                    {items.map( (item,val) => {return <Item key = {val}{...item}></Item>})}
                </div>
            </>)
}

export default ItemList;