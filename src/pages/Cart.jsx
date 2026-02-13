import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Cart() {
    const { cartItems } = useCart()
    const { clearCart } = useCart()
    const { removeItem } = useCart()
    const { increaseQuantity } = useCart()
    const { decreaseQuantity } = useCart()
    const { total } = useCart()

    return (
        <>

            <PageBanners title="Cart" page="Cart" />

            <div className="cart">
                {cartItems.length > 0 ?
                    <>
                        <div className="downhead" >
                            <h1>Your Cart</h1>
                            <button className="clear" onClick={clearCart}>Clear Cart</button>
                        </div>

                        {cartItems.map((item) => (
                            <>
                                <div className="cartlist">
                                    <HiX className="span" onClick={() => removeItem(item)} />
                                    <img src={item.thumbnail} alt="logo" />
                                    <h2>{item.title}</h2>
                                    <p>${item.price}</p>
                                    <div className="quantity">
                                        <BiMinus className="span" onClick={() => decreaseQuantity(item)} />
                                        <span className="span">{item.quantity}</span>
                                        <BiPlus className="span" onClick={() => increaseQuantity(item)} />
                                    </div>
                                    <p>${Number(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </>
                        ))}

                        <div className="cartorder">
                            <h1>Order Summary</h1>
                            <div className="cartorderin">
                                <div>
                                    <h3>Sub Total</h3>
                                    {Number(total.toFixed(2))}
                                </div>
                            </div>

                            <Link to="/checkout"><button className="proceed">Proceed To Checkout</button></Link>
                        </div>
                    </>
                    :

                    <div style={{ textAlign: "center" }}>
                        <h1 >No item in Cart</h1>
                        <Link to="/shop"><button className="clear">Go to Shop</button></Link>
                    </div>

                }

            </div >

        </>
    )
}


export default Cart;

