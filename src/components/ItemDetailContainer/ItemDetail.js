import React, {useState, Link}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import SizeSelector from './SizeSelector';
import Button from 'react-bootstrap/Button';

function ItemDetail({ item }){
    const [cart, setCart] = useState(0);
    const [compra, setCompra] = useState([]);
    const [counter, setCounter] = useState(false);


    const handleAdd = (quantity, stock)=>{
        if (quantity <= stock) {
          return()=>{
            setCart(cart + quantity); 
            setCompra({ counter: setCounter(true), cantidad: quantity, image: item.urlImg, title: item.title, description: item.description, price: item.price} );
            console.log(compra);
            console.log(counter);
          }	
        }
    }
    return  (<>
            <div className="row">
                <div className="col-6">
                    <img src={item.urlImg} className="w-100"></img>
                </div> 
                <div className="col-6 mt-5">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <h5>Precio: $<span>{item.price}</span></h5>
                    <SizeSelector />
                    {compra.counter && <ItemCount stock={20} initial={1} onAdd={handleAdd} />}
                </div> 
            </div>
    </>)
}

export default ItemDetail;