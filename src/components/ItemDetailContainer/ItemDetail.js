import React, {useState}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import SizeSelector from './SizeSelector';

function ItemDetail({ item }){

    const [cart, setCart] = useState(0);

    const handleAdd = (quantity, stock)=>{
        if (quantity <= stock) {
          return()=>{
            setCart(cart + quantity); 
            console.log({cart});
          }	
        }      
    }

    return  <>
            <div className="row">
                <div className="col-6">
                    <img src={item.urlImg} className="w-100"></img>
                </div> 
                <div className="col-6 mt-5">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <h5>Precio: $<span>{item.price}</span></h5>
                    <SizeSelector />
                    <ItemCount stock={20} initial={1} onAdd={handleAdd} />
                </div> 
            </div>
    </>
}

export default ItemDetail;