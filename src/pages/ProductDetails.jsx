import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PageBanners from "../components/PageBanners"
import LoggedIn from "../Context/LoggedIn"
import { toast } from "react-toastify"

function ProdunctDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const added = () => {
        let newItem = {
            image: product.thumbnail,
            title: product.title,
            price: product.price,
            quantity: 1
        }
        const cart = JSON.parse(localStorage.getItem("cartitems"))
        let exist = cart.find(e => e.title == product.title)
        exist ? exist.quantity += 1 : cart.push(newItem)
        localStorage.setItem("cartitems", JSON.stringify(cart))
        toast.success(`${product.title} has been added to cart successfully`)
    }

    const addToCart = () => {
        if (isLoggedIn) {
            alert("logged in user")
        } else {
            if (localStorage.getItem("cartitems") == null) {
                localStorage.setItem("cartitems", JSON.stringify([]))
                added()
            }
            else {
                added()
            }
        }
    }
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
                    <button className="addtocart" onClick={addToCart}>Addt to cart</button>

                </div>
            </div>
        </>
    )
}

export default ProdunctDetails