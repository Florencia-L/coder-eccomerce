import React, {useState}  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import SizeSelector from './SizeSelector';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext/CartContext';


function ItemDetail({ item }){
    const [count, setCount] = useState(null);
    const [btn, setButton] = useState(false);
    const [product, setProduct] = useState([]);

    const { add } = UseCartContext();
    //const { remove } = UseCartContext( item.find( product => product.id = itemId));
    //console.log(add);
    //console.log(remove);

    const handleAdd = (quantity, stock, evt)=>{
        setCount(quantity); 
        setProduct(item);
        console.log(product);
        console.log(count);

        if (quantity <= stock) {
          return()=>{
            setButton(true);
            add(item,quantity);
          }	
        }
        evt.stopPropagation();
    }


    return  (<>
            <div className="row justify-content-between">
                <div className="col-5">
                    <img src={`/images/${item.image}`} className="w-100"></img>
                </div> 
                <div className="col-6 mt-5">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <h5>Precio: $<span>{item.price}</span></h5>
                    <SizeSelector />
                    {!btn && <ItemCount stock={20} initial={1} onAdd={handleAdd} />}
                    {btn &&<Link to="/cart"><Button btn className="btn-block">Continuar</Button></Link>}
                </div> 
            </div>
    </>)
}

export default ItemDetail;