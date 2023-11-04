import React from 'react'
import { createContext } from 'react'
import all_product from '../Assets/all_product'
import { useCart } from 'react-use-cart'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

    const {totalItems} = useCart();
    console.log(totalItems);

    const contextValue = {all_product, totalItems}
    return (
   
        <ShopContext.Provider value={contextValue}>
             {props.children}
        </ShopContext.Provider>
      
    )
}

export default ShopContextProvider