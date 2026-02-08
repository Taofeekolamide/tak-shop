import { Link } from "react-router-dom"

function ProductTwo({ image, name, sale, price, detail }) {
    return (
        <>
            <div className="productone">
                <Link to={`/product/${detail}`}>
                    <div className="producttwoimg" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                    </div>
                    <h1>{name}</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <p>${sale}</p>
                        <p style={{ textDecoration: "line-through", color: "#8b8b8b" }}>${price}</p>
                    </div>
                </Link>
                <button className="producttwocart">Add To Cart</button>
            </div>
        </>
    )
}

export default ProductTwo