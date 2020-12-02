import React, { useContext, useState } from 'react';
export const CartContext = React.createContext();
export const UseCartContext = () => useContext(CartContext);

export default function CartProvider( { children,  defaultCart } ){
    
    const [cart, setCart] = useState(defaultCart);

    function add(item, quantity){
        const itemId = item.id;
        const cartIndex = cart.findIndex( product =>{return product.item.id == itemId});

        if (cartIndex !== -1){
            const tempCart = [...cart];
            tempCart[cartIndex].quantity+=quantity;
            setCart(tempCart);
        }
        else{
            setCart( [...cart, {item,quantity}]);
        }
    }

    function remove(item){
        const tempCart = cart.filter( (product)=>{return product.item.id !== item.item.id} );
        setCart(tempCart);
    }

    function removeAll(){
        setCart(defaultCart);
    }


    return <CartContext.Provider  value={{ cart, add, remove, removeAll }}>
        {children}
    </CartContext.Provider>
}