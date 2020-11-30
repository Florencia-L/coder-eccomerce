import React, {useState, useEffect} from 'react';
import { UseCartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ListCart from './ListCart';
import ListItemResume from './ListItemResume';
import { getFirestore } from '../../firebase';
import Form from 'react-bootstrap/Form';

function UseInput(defaultValue){
    const [value, setValue] = useState(defaultValue);
    return {
        onChange: (evt) => setValue(evt.target.value),
        value: value,
    }
}

export default function Cart({ }){
    const {cart, removeAll} = UseCartContext();
    const [totalPrice, setPrice] = useState(0);
    const [message, setMessage] = useState(false);
    const nameInput = UseInput("");
    const phoneInput = UseInput("");
    const emailInput = UseInput("");

    useEffect(()=>{
        let price = 0;
        cart.forEach((item) =>{ price += Number(item.item.price)*Number(item.quantity)})
        setPrice(price);
    },[cart]);

    async function createOrder(){
        const buyerContent = { name: {nameInput}, phone: {phoneInput}, email: {emailInput} };
        const cartContent = cart.map( item => 
            ({id: item.item.id, title: item.item.title, price: item.item.price, quantity: item.quantity}) 
        );

        console.log(buyerContent);
        console.log(cartContent);

        const order = {
            buyer : buyerContent,
            items: [ cartContent ],
            total: totalPrice,
            //si lo hardcodeo anda, si lo uso con las variables que le dan los valores no anda.
        };


        const db = getFirestore();
        const orders = db.collection('orders');
       
        try{
            const id = await orders.add(order);
            console.log('Order id: ' + id)
        } catch (err){
            console.log('no funciono');
        }

        setMessage(true);
    }


    return cart.length > 0 ?
    <> 
        {!message && <div className="container mt-5 pt-5">
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
                            <button className="btn btn-link mt-3" onClick={removeAll}>Vaciar carrito</button>
                        </div>
                    </ul>
                </div>
            </div>

            <hr className="mt-5" />
            <div className="row justify-content-between mt-5 mb-5">
                <div className="col-5">
                <h4>Check out</h4>
                <p>Completá el siguiente formulario para terminar tu compra</p>
                    <Form  className="my-4">
                        <Form.Group>
                            <Form.Label><small>Nombre y Apellido</small></Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre y apellido" {...nameInput} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small>Número de teléfono</small></Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su telefono" {...phoneInput} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><small>Email</small></Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" {...emailInput} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox" className="mt-4">
                            <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
                        </Form.Group>
                    </Form>

                    <button className="btn btn-primary mt-4" onClick={createOrder}
                    disabled={!nameInput.value || !phoneInput.value || !emailInput.value}>Finalizar compra</button>
                </div>
                <div className="col-6">
                    <p><strong>Terminos y condiciones</strong></p>
                    <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small></p>
                </div>
            </div>
            
        </div>}
        {message && <div message className="container text-center mt-5 pt-5">
            <h2 className="mt-5">Gracias por tu compra!</h2>
            <p>Te enviamos un email con tu facturación</p>
            <Link to="/"><button className="btn btn-primary mt-4">Volver al home</button></Link>
            </div>}
    </>
    : <>
    {<div className="mt-5 pt-5 container">
        <h6>No hay items en el carrito</h6>
        <Link to="/"><button className="btn-primary mt-3">Volver</button></Link>
    </div>}
    </>
}
