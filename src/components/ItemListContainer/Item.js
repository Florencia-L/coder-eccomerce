import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item( {id, title, price, image} ){

    return  <>
            <div className="col-3 mb-5">
                <Card className="h-100">
                    <Card.Body>
                        <Link to={`/item/${id}`}><img src = {`/images/${image}`} className="w-100 mb-3"></img></Link>
                        <h6>{title}</h6>
                        <p>Precio: $<span>{price}</span></p>
                    </Card.Body>
                </Card>
            </div> 
    </>
}

export default Item;