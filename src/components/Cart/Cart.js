import React from 'react';
import calza from '../../assets/images/producto.jpg';

function Cart({ }){

    return <>
        <div className="container mt-5 pt-5">
            <div className="row justify-content-between">
                <div className="col-md-7">
                    <ul className="list-unstyled">
                        <li>
                            <div className="row">
                                <div className="col-md-3">
                                    <img style={{maxWidth: "150px", width: "100%"}} src={calza} />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h6>Titulo del producto</h6>
                                    <p><small>Cantidad: </small></p>
                                </div>
                                <div className="col-md-3 text-right mt-3">
                                    <button className="btn-primary mb-3">X</button>
                                    <p>Precio: </p>
                                </div>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 mt-3">
                    <ul className="list-unstyled card p-4" style={{
                        backgroundColor: "white",
                        border: "none",
                        boxShadow: "0 3px 14px 0 rgba(0, 0, 0, 0.05)"}}>
                        <li>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Title Item</h6>
                                </div>
                                <div className="col-md-6 text-right">
                                    <h6>$542</h6>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>TOTAL</h6>
                            </div>
                            <div className="col-md-6 text-right">
                                <h6>$542</h6>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            {/* Condicional si tengo items muestro uno sino tengo muestro mensaje */}
            <div className="mt-5">
                <h6>No hay items en el carrito</h6>
                <button className="btn-primary mt-3">Volver</button>
            </div>
        </div>

        {/* Card Widget debe cambiar estado de cantidad de items agregados y mostrarse si hay items o no mostrarse */}
    </>
}

export default Cart;