import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import add from "../images/cat-01.png"
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";

function Cart() {
    const [quantity, setQuantity] = useState(0)
    const addmore = () => {
        setQuantity(Number(quantity + 1))
    }

    const removemore = () => {
        setQuantity(Number(quantity - 1))
    }
    return (
        <>
            <PageBanners title="Cart" page="Cart" />

            <div className="cart">
                <h1>Your Cart</h1>
                <div className="cartlist">
                    <HiX className="span" />
                    <img src={add} alt="logo" />
                    <h2>Wireless PS Handler cecmee ecience ceceicec ececie </h2>
                    <p>$100</p>
                    <div className="quantity">
                        <BiMinus className="span" onClick={removemore}/>
                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        <BiPlus className="span" onClick={addmore} />
                    </div>
                    <p>$100</p>
                </div>
                <div className="cartlist">
                    <HiX className="span" />
                    <img src={add} alt="logo" />
                    <h2>Wireless </h2>
                    <p>$100</p>
                    <div className="quantity">
                        <BiMinus className="span" onClick={removemore} />
                        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <BiPlus className="span" onClick={addmore} />
                    </div>
                    <p>$100</p>
                </div>

            </div>
        </>
    )
}

export default Cart;

