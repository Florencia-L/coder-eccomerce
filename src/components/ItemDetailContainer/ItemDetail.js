import React, {useState}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import SizeSelector from './SizeSelector';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ItemDetail({ item }){
    const [count, setCount] = useState(null);
    const [btn, setButton] = useState(false);

    const cart = ( { 
        quantity: count,
        item,
    } );

    const handleAdd = (quantity, stock, evt)=>{
        setCount(quantity); 
        if (quantity <= stock) {
          return()=>{
            setButton(true);
          }	
        }
        evt.stopPropagation();
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
                    {!btn && <ItemCount stock={20} initial={1} onAdd={handleAdd} />}
                    <Link to="/cart"><Button btn>Finalizar mi compra</Button></Link>
                </div> 
            </div>
    </>)
}

export default ItemDetail;