import React from 'react';
import Button from 'react-bootstrap/Button';
import iconCart from '../../assets/icons/shopping-cart.svg';
import { UseCartContext } from '../../context/CartContext/CartContext';

function CartWidget(){
    const {cart} = UseCartContext();
    const itemCount = cart.map( item => +1 ); //también suma como string jaja ya van 2

    return cart.length > 0 ? <> 
        {<Button variant="warning" className="mt-md-0 mt-4 text-white">{itemCount}<img src={iconCart} className="ml-2 search-icon"></img></Button>}
    </>
    : [];
}

export default CartWidget;