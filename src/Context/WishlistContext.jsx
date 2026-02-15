import { createContext, useContext, useEffect, useState } from "react";
import LoggedIn from "./LoggedIn";
import { toast } from "react-toastify";

const WishlistContext = createContext()

export const WishProvider = ({ children }) => {
    const [wishItems, setWishItems] = useState(() => {
        const wishes = localStorage.getItem("wishitems")
        return wishes ? JSON.parse(wishes) : []
    })

    //local storage
    useEffect(() => {
        localStorage.setItem("wishitems", JSON.stringify(wishItems))
    }, [wishItems])

    //add to wishlist
    const addToWishlist = (product) => {
        if (LoggedIn === true) {
            alert(product.title)
        } else {
            setWishItems(prev => {
                const exist = prev.find(e => e.title === product.title)
                if (exist) {
                    toast.info(`${product.title} already in wishlist`)
                    return prev
                }
                toast.success(`${product.title} added to wishlist`)
                return [...prev, { ...product }]
            })
        }
    }

    //clear wishlist
    const clear = () => {
        setWishItems([])
        toast.info("wishlist cleared")
    }

    //remove clear
    const removeItem = (product) => {
        setWishItems(prev => {
            return prev.filter((item) => item.title !== product.title)
        })
        toast.info(`${product.title} removed from wishlist`)
    }

    return <WishlistContext.Provider value={{
        removeItem,
        clear,
        wishItems,
        addToWishlist
    }}>
        {children}
    </WishlistContext.Provider>
}

export const useWishlist = () => useContext(WishlistContext)