import PageBanners from "../components/PageBanners";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Checkout() {

    const { cartItems, total } = useCart()
    const nav = useNavigate()

    const payment = (e) => {
        e.preventDefault()
        alert(total)
        localStorage.removeItem("cartitems")
        nav("/shop")
    }

    return (
        <>
            <PageBanners title="Checkout" page="Checkout" />

            <form onSubmit={payment}>
                <div className="checkout">
                    <div className="billing">
                        <h1>Billing Details</h1>

                        <div className="namegroup">
                            <fieldset>
                                <legend>First Name</legend>
                                <input type="text" required />
                            </fieldset>
                            <fieldset>
                                <legend>Last Name</legend>
                                <input type="text" required />
                            </fieldset>
                        </div>

                        <fieldset>
                            <legend>Country / Region</legend>
                            <input type="text" required />
                        </fieldset>

                        <fieldset>
                            <legend>Street Address</legend>
                            <input type="text" required />
                        </fieldset>

                        <fieldset>
                            <legend>Town / City</legend>
                            <input type="text" required />
                        </fieldset>

                        <fieldset>
                            <legend>Phone</legend>
                            <input type="tel" required />
                        </fieldset>

                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" required />
                        </fieldset>

                    </div>

                    <div className="yourorder">
                        <h1>Your Order</h1>
                        <div className="yourorderin">
                            <div>
                                <h3>Product</h3>
                                <h3>Subtotal</h3>
                            </div>
                            {cartItems.map((item) => (
                                <div>
                                    <h3>{item.title} X {item.quantity}</h3>
                                    <h3>{Number((item.quantity * item.price).toFixed(2))}</h3>
                                </div>
                            ))}
                            <div>
                                <h3>Total</h3>
                                <h3>{total}</h3>
                            </div>
                        </div>
                        <button className="proceed" type="submit">Proceed To Payment {total}</button>
                    </div>
                </div>
            </form >
        </>
    )
}

export default Checkout;