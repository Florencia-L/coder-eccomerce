import React from 'react';
//import calza from '../../../public/images/producto.jpg';
import { UseCartContext } from '../../context/CartContext/CartContext';

function ListCart(){
    const {cart, remove} = UseCartContext();

    return cart.map(item => <> 
    {<li>
        <div className="row">
            <div className="col-md-3">
                <img style={{maxWidth: "150px", width: "100%"}} src={`/images/${item.item.image}`} />
            </div>
            <div className="col-md-6 mt-3">
                <h6>{item.item.title}</h6>
                <p><small>Cantidad: {item.quantity}</small></p>
            </div>
            <div className="col-md-3 text-right mt-3">
                <button className="btn-primary mb-3" onClick = {()=>{remove(item)}}>X</button>
                <p>Precio: {item.item.price}</p>
            </div>
        </div>
        <hr />
    </li>}
    </>
    );
}

export default ListCart;