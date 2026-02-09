import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";

function Cart() {
    const [sortedItems, setSortedItems] = useState([])

    const removeItem = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let toRemove = cartItems.findIndex(e => e.title == itemTitle)
        cartItems.splice(toRemove, 1)
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
    }

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        setSortedItems(cartItems)
    }, [])

    const plusQuantity = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let increase = cartItems.find(e => e.title == itemTitle)
        increase.quantity += 1;
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
    }

    const minusQuantity = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let increase = cartItems.find(e => e.title == itemTitle)
        if (increase.quantity > 1) {
            increase.quantity -= 1;
        }
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
    }

    return (
        <>

            <PageBanners title="Cart" page="Cart" />

            <div className="cart">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h1>Your Cart</h1>
                    <button className="clear" onClick={() => localStorage.removeItem("cartitems")}>Clear Cart</button>
                </div>

                {sortedItems.map((item) => (
                    <>
                        <div className="cartlist">
                            <HiX className="span" onClick={() => removeItem(item.title)} />
                            <img src={item.image} alt="logo" />
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                            <div className="quantity">
                                <BiMinus className="span" onClick={() => minusQuantity(item.title)} />
                                <input type="text" value={item.quantity} />
                                <BiPlus className="span" onClick={() => plusQuantity(item.title)} />
                            </div>
                            <p>{Number(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </>

                ))}

            </div>
        </>
    )
}

export default Cart;

