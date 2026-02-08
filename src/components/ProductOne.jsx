import { useContext } from "react"
import { BiHeart } from "react-icons/bi"
import { Link } from "react-router-dom"
import LoggedIn from "../Context/LoggedIn"

function ProductOne({ image, name, sale, price, detail }) {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoggedIn)
    const addToCart = () => {
        if (!isLoggedIn) {
            alert("no logged in user")
        }

        if (isLoggedIn) {
            alert("logged in user")
        }
    }
    return (
        <>

            <div className="productone">

                <div className="productimg" style={{ backgroundImage: `url(${image})`, }}>
                    <div>
                        <button onClick={addToCart}>Add To Cart</button>
                        <span style={{ borderRadius: "50%", paddingTop: "8px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "5px", backgroundColor: "#3577f0" }}> <BiHeart color="white" fontSize="16px" /></span>
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