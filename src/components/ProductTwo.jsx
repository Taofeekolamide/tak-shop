import { Link } from "react-router-dom"
import { useCart } from "../Context/CartContext"

function ProductTwo({ product }) {

   const {addToCart} = useCart()

    const truncate = (text) => {
        let res = text.split(" ")
        return res.slice(0, 1).join(" ") + "..."
    }

    return (
        <>
            <div className="productone">
                <Link to={`/product/${product.id}`}>
                    <div className="producttwoimg" style={{ backgroundImage: `url(${product.images})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                    </div>
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