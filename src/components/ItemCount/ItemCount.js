import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, onAdd}){
    const [quantity, setQuantity] = useState(initial);

    const handleClickAdd = ()=>{
        let add = quantity + 1;
        setQuantity( ( add > stock ) ? stock : add);
    }

    const handleClickRest = ()=>{
        let add = quantity - 1;
        setQuantity( ( add < 0 ) ? 0 : add);
    }


    return  <>
        <p>Stock: {stock}</p>
        <p>Initial: {quantity}</p>
        <p>Carrito: </p>
        <div className="d-flex align-items-center">
            <Button variant="light" onClick={handleClickRest}>-</Button>
            <p className="mx-3 mt-3">{quantity}</p>
            <Button variant="light" onClick={handleClickAdd}>+</Button>
        </div>
       <Button variant="primary" onClick={onAdd(quantity, stock)}>Agregar</Button>
    </>
}

export default ItemCount;