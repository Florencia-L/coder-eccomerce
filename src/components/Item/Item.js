import React from 'react';

function Item( {id, title, price, urlImg} ){

    return  <>
        <li>
            <div className="col-3">
                <card>
                    <card-header>
                        <img src={urlImg}></img>
                    </card-header>
                    <card-body>
                        <h5>{title}</h5>
                        <p>Precio: $<span>{price}</span></p>
                    </card-body>
                </card>
            </div>  
        </li>
    </>
}

export default Item;