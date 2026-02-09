import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { useEffect, useState } from "react";

function Wishlist() {
    const [sortedItems, setSortedItems] = useState([])

    const removeItem = (itemTitle) => {
        const wishItems = JSON.parse(localStorage.getItem("wishitems")) || []
        let toRemove = wishItems.findIndex(e => e.title == itemTitle)
        wishItems.splice(toRemove, 1)
        localStorage.setItem("wishitems", JSON.stringify(wishItems))
    }

    useEffect(() => {
        const wishItems = JSON.parse(localStorage.getItem("wishitems")) || []
        setSortedItems(wishItems)
    }, [])

    return (
        <>

            <PageBanners title="Wishlist" page="Wishlist" />

            <div className="cart">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1>Your Wishlist</h1>
                    <button className="clear" onClick={() => localStorage.removeItem("wishitems")}>Clear Wishlist</button>
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

            </div>
        </>
    )
}

export default Wishlist;

