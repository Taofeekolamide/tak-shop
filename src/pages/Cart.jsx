import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Cart() {
    const [sortedItems, setSortedItems] = useState([])
    useEffect(() => {
        const updateCart = () => {
            const cartItems = JSON.parse(localStorage.getItem("cartitems")) || [];
            setSortedItems(cartItems);
        };

        updateCart();
        window.addEventListener("cartUpdated", updateCart);

        return () => window.removeEventListener("cartUpdated", updateCart);
    }, []);

    const removeItem = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let toRemove = cartItems.findIndex(e => e.title == itemTitle)
        cartItems.splice(toRemove, 1)
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
        window.dispatchEvent(new Event("cartUpdated"));
        toast.info(`${itemTitle} removed from cart`);
    }

    const plusQuantity = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let increase = cartItems.find(e => e.title == itemTitle)
        increase.quantity += 1;
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
        window.dispatchEvent(new Event("cartUpdated"));
    }

    const minusQuantity = (itemTitle) => {
        const cartItems = JSON.parse(localStorage.getItem("cartitems")) || []
        let increase = cartItems.find(e => e.title == itemTitle)
        if (increase.quantity > 1) {
            increase.quantity -= 1;
        }
        localStorage.setItem("cartitems", JSON.stringify(cartItems))
        window.dispatchEvent(new Event("cartUpdated"));
    }

    const clear = () => {
        localStorage.removeItem("cartitems")
        window.dispatchEvent(new Event("cartUpdated"));
        toast.info("cart cleared")
    }

    return (
        <>

            <PageBanners title="Cart" page="Cart" />

            <div className="cart">
                {sortedItems.length > 0 ?
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h1>Your Cart</h1>
                            <button className="clear" onClick={clear}>Clear Cart</button>
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
                                        <span className="span">{item.quantity}</span>
                                        {/* <input type="text" value={item.quantity} /> */}
                                        <BiPlus className="span" onClick={() => plusQuantity(item.title)} />
                                    </div>
                                    <p>{Number(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </>
                        ))}

                        <div className="cartorder">
                            <h1>Order Summary</h1>
                            <div className="cartorderin">
                                <div>
                                    <h3>Sub Total</h3>
                                    {sortedItems.reduce((sum, item) => {
                                        return Number((sum + item.price * item.quantity).toFixed(2))
                                    }, 0)}
                                </div>
                            </div>

                            <Link to="/checkout"><button className="proceed">Proceed To Checkout</button></Link>
                        </div>
                    </>
                    :

                    <div style={{ textAlign: "center" }}>
                        <h1 >No item in Wishlist</h1>
                        <Link to="/shop"><button className="clear">Go to Shop</button></Link>
                    </div>

                }

            </div >


        </>
    )
}

export default Cart;

