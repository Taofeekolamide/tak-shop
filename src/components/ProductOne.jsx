import { useContext } from "react"
import { BiHeart } from "react-icons/bi"
import { Link } from "react-router-dom"
import LoggedIn from "../Context/LoggedIn"

function ProductOne({ image, name, sale, price, detail }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn)

    const added = () => {
        let newItem = {
            image: image,
            title: name,
            price: sale,
            quantity: 1
        }
        const cartitems = JSON.parse(localStorage.getItem("cartitems")) || []
        const exist = cartitems.find(e => e.title === name)
        exist ? exist.quantity += 1 : cartitems.push(newItem)
        localStorage.setItem("cartitems", JSON.stringify(cartitems))
        alert(`${name} has been added to cart successfully`)
    }

    const addToCart = () => {
        if (isLoggedIn) {
            alert("logged in ")
        } else {
            if (localStorage.getItem("cartitems") == null) {
                localStorage.setItem("cartitems", JSON.stringify([]))
                added()
            } else {
                added()
            }
        }
    }

    const wishAdded = () => {
        let newItem = {
            image: image,
            title: name,
            price: sale,
        }
        const wishitems = JSON.parse(localStorage.getItem("wishitems")) || []
        const exist = wishitems.find(e => e.title === name)
        if (exist) {
            alert(`${name} already on the wishlist`)
        } else {
            wishitems.push(newItem)
            localStorage.setItem("wishitems", JSON.stringify(wishitems))
            alert(`${name} has been added to wishlist successfully`)
        }
    }

    const addToWishlist = () => {
        if (isLoggedIn) {
            alert("logged in user")
        }
        else {
            if (localStorage.getItem("wishitems") === null) {
                localStorage.setItem("wishitems", JSON.stringify([]))
                wishAdded()
            } else {
                wishAdded()
            }
        }
    }

    return (
        <>

            <div className="productone">

                <div className="productimg" style={{ backgroundImage: `url(${image})` }} >
                    <div>
                        <button onClick={addToCart}>Add To Cart</button>
                        <span onClick={addToWishlist} style={{ borderRadius: "50%", paddingTop: "8px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "5px", backgroundColor: "#3577f0" }}> <BiHeart color="white" fontSize="16px" /></span>
                    </div>
                </div>
                <Link to={`product/${detail}`}>
                    <h1>{name}</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <p>${sale}</p>
                        <p style={{ textDecoration: "line-through", color: "#8b8b8b" }}>${price}</p>
                    </div>

                </Link>

            </div>

        </>
    )
}

export default ProductOne