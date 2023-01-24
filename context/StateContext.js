import product from '@/ecommerce/schemas/product'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({children}) =>{
    const [showCart, setshowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantites, setTotalQuantites] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct
    let index



    const onAdd= (product,quantity)=>{
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        
        setTotalPrice((preTotalPrice) =>preTotalPrice + product.price * quantity)
        setTotalQuantites((prevTotalQuantities) => prevTotalQuantities + quantity)


        if(checkProductInCart)
        {
            const updatedcartItems = cartItems.map((cartProduct) =>{
                if(cartProduct._id === product._id)
                    return {...cartProduct, quantity:cartProduct.quantity + quantity}
            })
            setCartItems(updatedcartItems)
        }

        else
        {
            product.quantity = quantity
            setCartItems([...cartItems,{...product}])
        }

        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const onRemove = (product) =>{
        foundProduct= cartItems.find((item)=> item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)

        setTotalPrice((preTotalPrice) => preTotalPrice -foundProduct.price * foundProduct.quantity)
        setTotalQuantites(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)

    }

    const toggleCartitemQuantity = (id,value) =>{
        foundProduct = cartItems.find((item)=> item._id === id)
        index = cartItems.findIndex((product)=> product._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === 'inc')
        {
            setCartItems ([...newCartItems,{...foundProduct,quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantites(prevTotalQuantities => prevTotalQuantities+1)
        }

        else if(value === 'dec')
        {
            if(foundProduct.quantity >1)
            {
                setCartItems([...cartItems,{...foundProduct,quantity: foundProduct.quantity - 1 }])
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantites(preTotalPrice => prevTotalQuantities - 1)
            }
            
        }

    }



    const incQty= () => {
        setQty((prevQty) => prevQty+1)
    }



    const decQty= () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1)
                return 1

            return prevQty - 1
        })
    }

    return(
        <Context.Provider 
            value={{
                showCart,
                setshowCart,
                cartItems,
                totalPrice,
                totalQuantites,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartitemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantites
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)