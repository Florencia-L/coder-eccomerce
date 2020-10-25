import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, initial, onAdd}){
    const [initialCount, setInitial] = useState(initial);
    const [stockCount, setStock] = useState(stock);

    const handleClickAdd = ()=>{
        setInitial(initialCount + 1);
        setStock(stockCount - 1);
        //por alguna razón que no entiendo me suma como string los numeros
    }

    const handleClickRest = ()=>{
        setInitial(initialCount - 1);
        setStock(stockCount + 1);
    }


    return  <>
        <p>Stock: {stockCount}</p>
        <p>Initial: {initialCount}</p>
        <p>Carrito: </p>
        <div className="d-flex align-items-center">
            <Button variant="light" onClick={handleClickRest}>-</Button>
            <p className="mx-3 mt-3">{initialCount}</p>
            <Button variant="light" onClick={handleClickAdd}>+</Button>
        </div>
       <Button variant="primary" onClick={onAdd}>Agregar</Button>
    </>
}

export default ItemCount;