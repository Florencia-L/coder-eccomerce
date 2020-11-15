import React, { useContext, useState } from 'react';


export const CartContext = React.createContext();

export const UseCartContext = () => useContext(CartContext);


export default function CartProvider( { children,  defaultCart } ){
    
    const [cart, SetCart] = useState(defaultCart);
    //cart [ {id=1, quantity=2} ] cómo se deberia ver el estado cart?

    function add(item, quantity){
        //Agrega el item y actualiza el estado
        //antes de terminar la operación actualizar el estado
        const itemId = item.find( product => product.id = id);
        const cartItem = cart.find( product => product.id = id);

        if (itemId == cartItem){
            SetCart( cartItem = {item: {item}, quantity: val+quantity} );
        }
        else{
            SetCart( cart + {item: {item}, quantity: quantity} );
        }
    }

    function remove(itemId){
        //Remover el item y actualiza el estado
        //clear() remover todos los items
        const cartItem = cart.find( product => product.id = id);
        item.find( product => product.id = itemId);

        if (itemId == cartItem){
            SetCart( clear(itemId) );
        }
    }


    return <CardContext.Provider  value={{ cart, add, remove }}>
        {children}
    </CardContext.Provider>
}