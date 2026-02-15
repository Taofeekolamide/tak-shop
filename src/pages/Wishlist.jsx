import { HiX } from "react-icons/hi";
import PageBanners from "../components/PageBanners";
import { useWishlist } from "../Context/WishlistContext";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Wishlist() {
    const { addToCart } = useCart()
    const { clear, removeItem, wishItems } = useWishlist()

    return (
        <>

            <PageBanners title="Wishlist" page="Wishlist" />

            <div className="cart">
                {wishItems.length > 0 ?
                    <>
                        <div className="downhead">
                            <h1>Your Wishlist</h1>
                            <button className="clear" onClick={clear}>Clear Wishlist</button>
                        </div>

                        {wishItems.map((item) => (
                            <>
                                <div className="cartlist">
                                    <HiX className="span" onClick={() => removeItem(item)}/>
                                    <img src={item.thumbnail} alt="logo" />
                                    <h2><Link to={`/product/${item.id}`}>{item.title}</Link></h2>
                                    <p>${item.price}</p>
                                    <button className="clear" onClick={() => addToCart(item)} >Add To Cart</button>
                                </div>
                            </>

                        ))}
                    </>
                    :
                    <>
                        <div style={{ textAlign: "center" }}>
                            <h1 >No item in Wishlist</h1>
                        </div>
                    </>
                }


            </div>
        </>
    )
}

export default Wishlist;

