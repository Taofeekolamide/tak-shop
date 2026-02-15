import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext"
import { BiHeart } from "react-icons/bi"
import { useWishlist } from "../Context/WishlistContext"

function ProductTwo({ product }) {

    const { addToCart } = useCart()
    const { addToWishlist } = useWishlist()

    const truncate = (text) => {
        let res = text.split(" ")
        return res.slice(0, 1).join(" ") + "..."
    }

    return (
        <>
            <div className="productone">

                <div className="producttwoimg" style={{ backgroundImage: `url(${product.thumbnail})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <span onClick={() => addToWishlist(product)} className="wish-icon"> <BiHeart color="white" fontSize="16px" /></span>
                </div>
                <Link to={`/product/${product.id}`}>
                    <h1>{truncate(product.title)}</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <p>${product.discountPercentage}</p>
                        <p style={{ textDecoration: "line-through", color: "#8b8b8b" }}>${product.price}</p>
                    </div>
                </Link>
                <button className="producttwocart" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </>
    )
}

export default ProductTwo