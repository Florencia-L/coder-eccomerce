import React from 'react';
import { UseCartContext } from '../../context/CartContext/CartContext';

function ListItemResume({ }){
    const {cart} = UseCartContext();

    return cart.map(item => <> 
        {<li>
            <div className="row">
                <div className="col-md-10">
                    <p>x{item.quantity} <strong className="ml-3">{item.item.title}</strong></p>
                </div>
                <div className="col-md-2">
                    <p>{item.item.price}</p>
                </div>
            </div>
            <hr />
        </li>}
        </>
    );
}


export default ListItemResume;