import React, { useContext, useState } from 'react';


export const CartContext = React.createContext();

export const UseCartContext = () => useContext(CartContext);


export default function CartProvider( { children, defaultCart } ){
    
    const [cart, SetCart] = useState(defaultCart);


    function add(item, quantity){
        //Agrega el item y actualiza el estado
        //antes de terminar la operación actualizar el estado
        itemId = item.find( id => item.id );
        itemIdCart = cart.find( id => item.id );
        if (itemId == itemIdCart){
            SetCart();
        }
    }

    function remove(itemId){
        //Remover el item y actualiza el estado
        //clear() remover todos los items
    }


    return <CardContext.Provider  value={{ cart, add, remove }}>
        {children}
    </CardContext.Provider>
}