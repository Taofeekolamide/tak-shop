import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PageBanners from "../components/PageBanners"
import { useCart } from "../Context/CartContext"

function ProdunctDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { addToCart } = useCart()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <>
            <PageBanners title="Product" page={<><Link to={`/category/${product.category}`}> {product.category}</Link> / {product.title}</>} />
            <div className="single">
                <div className="singleimage">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="singleinfo">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p> Brand: {product.brand}</p>
                    <p>Unit Left {product.stock}</p>
                    <h3><span style={{ fontSize: "25px" }}>${product.price} </span>&nbsp;<span style={{ textDecoration: "line-through", color: "#919191" }}>${product.discountPercentage}</span></h3>
                    <button className="addtocart" onClick={() => addToCart(product)}>Addt to cart</button>

                </div>
            </div>
        </>
    )
}

export default ProdunctDetails