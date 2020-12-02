import React, {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import iconCart from '../../assets/icons/shopping-cart.svg';
import { UseCartContext } from '../../context/CartContext/CartContext';

function CartWidget(){
    const {cart} = UseCartContext();
    const [totalQuantity, setQuantity] = useState(0);

    useEffect(()=>{
        let quantity = 0;
        cart.forEach((item) =>{ quantity += Number(item.quantity)})
        setQuantity(quantity);
    },[cart]);


    return cart.length > 0 ? <> 
        {<Button variant="warning" className="mt-md-0 mt-4 text-white position-relative">
            <img src={iconCart} className="search-icon"></img>
            <span className="badge badge-pill cart badge-success">{totalQuantity}</span>
        </Button>}
    </>
    : [];
}

export default CartWidget;