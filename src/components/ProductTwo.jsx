import { Link } from "react-router-dom"
import LoggedIn from "../Context/LoggedIn"
import { useContext } from "react"

function ProductTwo({ image, name, sale, price, detail }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn)

    const added = (newItem) => {
        const cart = JSON.parse(localStorage.getItem("cartitems")) || []
        let exist = cart.find(f => f.title === name)
        exist ? exist.quantity += 1 : cart.push(newItem)
        JSON.stringify(localStorage.setItem("cartitems", JSON.stringify(cart)))
        alert(`${name} has been added to cart successfully`)
    }

    const addToCart = () => {

        let newItem = {
            image: image,
            title: name,
            price: sale,
            quantity: 1
        }

        if (isLoggedIn) {
            alert("logged in")
        }

        if (!isLoggedIn) {
            if (localStorage.getItem("cartitems") == null) {
                localStorage.setItem("cartitems", JSON.stringify([]))
                added(newItem)
            }
            else {
                added(newItem)
            }
        }
    }
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
                <button className="producttwocart" onClick={addToCart}>Add To Cart</button>
            </div>
        </>
    )
}

export default ProductTwo