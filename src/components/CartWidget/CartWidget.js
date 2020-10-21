import React from 'react';
import Button from 'react-bootstrap/Button';
import iconCart from '../../assets/icons/shopping-cart.svg';

function CartWidget(){
    return  <>
       <Button variant="warning" className="mt-md-0 mt-4"><img src={iconCart} className="search-icon"></img></Button>
</>
}

export default CartWidget;