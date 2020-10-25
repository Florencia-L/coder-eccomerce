import React from 'react';

function ItemListContainer({title, children}){
    return  <>
    <div className="container">
        <h5 className="text-center font-weight-normal">{title}</h5>
    </div>
    {children}
</>
}

export default ItemListContainer;