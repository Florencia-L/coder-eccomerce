import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item( {id, title, price, urlImg} ){

    return  <>
            <div className="col-3">
                <Card>
                    <Card.Body>
                        <Link to={`/item/${id}`}><img src={urlImg} className="w-100"></img></Link>
                        <h5>{title}</h5>
                        <p>Precio: $<span>{price}</span></p>
                    </Card.Body>
                </Card>
            </div> 
    </>
}

export default Item;