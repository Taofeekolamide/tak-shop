import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { useContext, useEffect, useState } from "react";
import LoggedIn from "../Context/LoggedIn";
import { toast } from "react-toastify";

function Wishlist() {
    const [sortedItems, setSortedItems] = useState([])
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn)

    const removeItem = (itemTitle) => {
        const wishItems = JSON.parse(localStorage.getItem("wishitems")) || []
        let toRemove = wishItems.findIndex(e => e.title == itemTitle)
        wishItems.splice(toRemove, 1)
        localStorage.setItem("wishitems", JSON.stringify(wishItems))
        toast.error(`${itemTitle} has been removed from wishlist`)
        window.dispatchEvent(new Event("cartUpdated"))
    }

    useEffect(() => {
        const updateCart = () => {
            const wishItems = JSON.parse(localStorage.getItem("wishitems")) || [];
            setSortedItems(wishItems);
        };
        updateCart();
        window.addEventListener("cartUpdated", updateCart);
        return () => window.removeEventListener("cartUpdated", updateCart);
    }, []);

    const clear = () => {
        localStorage.removeItem("wishitems")
        window.dispatchEvent(new Event("cartUpdated"))
        toast.info(`wishlist has been cleard`)
    }

    const addToCart = (image, title, price) => {
        let newItem = {
            image: image,
            title: title,
            price: price,
            quantity: 1,
        }
        if (isLoggedIn) {
            alert("logged in")
        }
        else {
            if (localStorage.getItem("cartitems") == null) {
                localStorage.setItem("cartitems", JSON.stringify([]))
                const cartitems = JSON.parse(localStorage.getItem("cartitems"))
                const exist = cartitems.find(e => e.title === title)
                exist ? exist.quantity += 1 : cartitems.push(newItem)
                localStorage.setItem("cartitems", JSON.stringify(cartitems))
                toast.success(`${title} has been added to cart successfully`)
                window.dispatchEvent(new Event("cartUpdated"))
            } else {
                const cartitems = JSON.parse(localStorage.getItem("cartitems"))
                const exist = cartitems.find(e => e.title === title)
                exist ? exist.quantity += 1 : cartitems.push(newItem)
                localStorage.setItem("cartitems", JSON.stringify(cartitems))
                toast.success(`${title} has been added to cart successfully`)
                window.dispatchEvent(new Event("cartUpdated"))
            }
        }
    }
    return (
        <>

            <PageBanners title="Wishlist" page="Wishlist" />

            <div className="cart">
                {sortedItems.length > 0 ?
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h1>Your Wishlist</h1>
                            <button className="clear" onClick={clear}>Clear Wishlist</button>
                        </div>

                        {sortedItems.map((item) => (
                            <>
                                <div className="cartlist">
                                    <HiX className="span" onClick={() => removeItem(item.title)} />
                                    <img src={item.image} alt="logo" />
                                    <h2>{item.title}</h2>
                                    <p>${item.price}</p>
                                    <button className="clear" onClick={() => addToCart(item.image, item.title, item.price)}>Add To Cart</button>
                                </div>
                            </>

                        ))}
                    </>
                    :
                    <>
                        <div style={{textAlign: "center"}}>
                            <h1 >No item in Wishlist</h1>
                        </div>
                    </>
                }


            </div>
        </>
    )
}

export default Wishlist;

