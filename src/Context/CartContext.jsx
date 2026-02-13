import { createContext, useContext, useEffect, useState } from "react";
import LoggedIn from "./LoggedIn";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    //local storage
    useEffect(() => {
        if (!LoggedIn) {
            localStorage.setItem("cartitems", JSON.stringify(cartItems))
        }
    }, [LoggedIn, cartItems])

    //get cart items
    useEffect(() => {
        if (LoggedIn === true) {
            toast.success("logged in")
        } else {
            const guestItem = JSON.parse(localStorage.getItem("cartitems")) || []
            setCartItems(guestItem)
        }
    }, [LoggedIn])

    //add to cart
    const addToCart = (product) => {
        if (LoggedIn === true) {
            alert("logged inn")
        }
        else {
            setCartItems(prev => {
                const exist = prev.find(e => e.title === product.title)
                return exist ?
                    prev.map((item) => (
                        { ...item, quantity: item.quantity + 1 }
                    ))
                    :
                    [...prev, { ...product, quantity: 1 }]
            })
            toast.success(`${product.title} has beeen added to car`)
        }
    }

    //total
    const total =
        cartItems.reduce((sum, item) => {
            return sum + item.quantity * item.price
        }, 0)


    //increase quantity
    const increaseQuantity = (product) => {
        if (product.stock >= product.quantity) {
            setCartItems(
                prev => {
                    return prev.map(item =>
                        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
                    )
                }
            )
        }
        else {
            toast.info(`${product.title} is out of stock`)
        }
    }

    const decreaseQuantity = (product) => {
        if (product.quantity > 1) {
            setCartItems(
                prev => {
                    return prev.map(item =>
                        item.title === product.title ? { ...item, quantity: item.quantity - 1 } : item
                    )
                }

            )
        }
    }

    //remove item
    const removeItem = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
        toast.info(`${product.title} has been removed from cart`)
    }

    //clear cart
    const clearCart = () => {
        setCartItems([])
        toast.info("cart has been cleared")
    }

    return (
        <CartContext.Provider value={{
            total,
            setCartItems,
            decreaseQuantity,
            increaseQuantity,
            removeItem,
            clearCart,
            cartItems,
            addToCart

        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)