import React, {useState,useEffect} from 'react';
import { UseCartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ListCart from './ListCart'
import ListItemResume from './ListItemResume'



function Cart({ }){
    const {cart, removeAll} = UseCartContext();
    const [totalPrice, setPrice] = useState(0);
    const quantity = cart.map( itemQuantity => (itemQuantity.quantity));

    useEffect(()=>{
        let price = 0;
        cart.forEach((item) =>{ price += Number(item.item.price)*Number(item.quantity)})
        setPrice(price);
    },[cart]);

    return cart.length > 0 ?
    <> 
        {<div className="container mt-5 pt-5">
            <div className="row justify-content-between">
                <div className="col-md-7">
                    <ul className="list-unstyled">
                       <ListCart />
                    </ul>
                </div>
                <div className="col-md-5 mt-3">
                    <ul className="list-unstyled card p-4" style={{
                        backgroundColor: "white",
                        border: "none",
                        boxShadow: "0 3px 14px 0 rgba(0, 0, 0, 0.05)"}}>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Tu compra</h6>
                            </div>
                        </div>
                        <ListItemResume />
                        <div className="row">
                            <div className="col-md-6">
                                <h6>TOTAL</h6>
                            </div>
                            <div className="col-md-6 text-right">
                            <h6>$ {totalPrice}</h6>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <button className="btn btn-link" onClick={removeAll}>Vaciar carrito</button>
        </div>}

        {/* Card Widget debe cambiar estado de cantidad de items agregados y mostrarse si hay items o no mostrarse */}
    </>
    : <>
    {<div className="mt-5 pt-5 container">
        <h6>No hay items en el carrito</h6>
        <Link to="/"><button className="btn-primary mt-3">Volver</button></Link>
    </div>}
    </>
}

export default Cart;