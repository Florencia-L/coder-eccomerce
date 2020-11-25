import React, {useState, useEffect} from 'react';
import { UseCartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ListCart from './ListCart';
import ListItemResume from './ListItemResume';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



function Cart({ }){
    const {cart, removeAll} = UseCartContext();
    const [totalPrice, setPrice] = useState(0);
    const quantity = cart.map( itemQuantity => (itemQuantity.quantity));

    useEffect(()=>{
        let price = 0;
        cart.forEach((item) =>{ price += Number(item.item.price)*Number(item.quantity)})
        setPrice(price);
    },[cart]);

    async function createOrder(){
        const order = {
            buyer : { name: 'Florencia', phone: '154454526', email: 'flor.lapetina@hotmail.com' },
            //capturarlo del formulario cuando lo agregue
            items: [
                cart.map( item => 
                    ({id: item.id, title: item.item.title, price: item.item.price, quantity: item.quantity}) 
                )
                // { id: 1, title:'Calza deportiva Scout', price: 1250, quantity: 1},
                // { id: 2, title:'Calza deportiva PowerShot', price: 1380, quantity: 1},
            ],
            total: totalPrice,
        }

        const db = getFirestore();
        const orders = db.collection('orders');
        // orders.add(order).then( id => {
        //     console.log('Order id: ' + id)
        // });
        try{
            const id = await orders.add(order);
            console.log('Order id: ' + id)
        } catch (err){
            console.log('no funciono');
        }
    }

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
                            <button className="btn btn-primary btn-block mt-4" onClick={createOrder}>Finalizar compra</button>
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