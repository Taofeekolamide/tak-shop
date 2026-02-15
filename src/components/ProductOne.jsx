import { BiHeart } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext"
import { useWishlist } from "../Context/WishlistContext"

function ProductOne({ product }) {
    const { addToCart } = useCart()
    const { addToWishlist } = useWishlist()

    const truncate = (text) => {
        let res = text.split(" ")
        return res.slice(0, 1).join(" ") + "..."
    }

    return (
        <>

            <div className="productone">

                <div className="productimg" style={{ backgroundImage: `url(${product.thumbnail}) ` }} >
                    <div>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                        <span onClick={() => addToWishlist(product)} className="wish-icon" > <BiHeart color="white" fontSize="16px" /></span>
                    </div>
                </div>
                <Link to={`/product/${product.id}`}>
                    <h1>{truncate(product.title)}</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <p>${product.discountPercentage}</p>
                        <p style={{ textDecoration: "line-through", color: "#8b8b8b" }}>${product.price}</p>
                    </div>

                </Link>

            </div>

        </>
    )
}

export default ProductOne