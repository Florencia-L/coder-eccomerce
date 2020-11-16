import React from 'react';

function Cart({ }){

    return <>
        <div>
            <ul>
                <li>
                    <div className="row">
                        <div className="col-md-2">
                            <img style="background: grey" />
                        </div>
                        <div className="col-md-6">
                            <h6>Titulo del producto</h6>
                            <p><small>Cantidad: </small></p>
                        </div>
                        <div className="col-md-2">
                            <button>X</button>
                            <p>Precio: </p>
                        </div>
                    </div>
                </li>
            </ul>
            {/* Condicional si tengo items muestro uno sino tengo muestro mensaje */}
            <div>
                <h6>No hay items en el carrito</h6>
                <button>Volver</button>
            </div>
        </div>

        {/* Card Widget debe cambiar estado de cantidad de items agregados y mostrarse si hay items o no mostrarse */}
    </>
}

export default Cart;