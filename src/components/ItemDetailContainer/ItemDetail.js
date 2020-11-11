import React, {useState, Link}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import SizeSelector from './SizeSelector';
import Button from 'react-bootstrap/Button';

function ItemDetail({ item }){
    const [cart, setCart] = useState(0);
    //const [qState, setQState] = useState(null);
    const [count, setCount] = useState(null);
    //const [button, setButton] = useState(false);
    
    const handleAdd = (quantity, stock)=>{
        if (quantity <= stock) {
          return()=>{
            setCart(cart + quantity); 
           // setQState(quantity);
            setCount(false); 
            //setButton(true); 
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
                    <ItemCount count={count} stock={20} initial={1} onAdd={handleAdd} />
                    {/*<Button variant="primary" block button={button}><Link to="/cart">Termina tu compra ({qState})</Link></Button>*/}
                </div> 
            </div>
    </>)
}

export default ItemDetail;