import React from 'react';

function ItemList({ items }){

    return <>
    <div className="row">
        <ul>
            { items }
        </ul>
    </div>
    </>
}

export default ItemList;