import { useContext, useEffect, useState } from "react"
import { BiBasket, BiCart, BiHeart, BiMenu, BiSearch, BiUser } from "react-icons/bi"
import { HiX } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
import NavToggle from "../Context/NavToggle"
import { useCart } from "../Context/CartContext"

function Header() {
    const [search, setSearch] = useState("")
    const { toggleNav, setToggleNav } = useContext(NavToggle);
    const [cartCount, setCartCount] = useState(0)
    const { cartItems } = useCart()

    const [wishCount, setWishCount] = useState(0)
    const nav = useNavigate()

    const keyCheck = (e) => {
        if (e.key === "Enter") {
            nav(`/search?q=${search.toLowerCase()}`)
        }
    }

    const clearSearch = () => {
        setSearch("")
    }

    const showMenu = () => {
        setToggleNav(!toggleNav)
    }

    useEffect(() => {
        setCartCount(cartItems.length)
    }, [cartItems])


    setInterval(() => {
        let wishcount = JSON.parse(localStorage.getItem("wishitems")) || []
        setWishCount(wishcount.length)
    })

    return (
        <>
            <header>
                <div className="topheader">
                    <h1 className="logo"><BiCart />&nbsp;TakShop</h1>
                    <div className="searchbar">
                        <BiSearch fontSize="20px" color="#00000081" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={keyCheck} />
                        <HiX fontSize="20px" color="#00000081" onClick={clearSearch} />
                    </div>
                </div>

                <div className="header">
                    <div className="headerbutton">
                        <BiBasket fontSize="25px" />
                        <span>Categories</span>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <div className="relevantgroup">
                        <Link to="./wishlist"><BiHeart className="relevanticons" /><span className="cart-badge">{wishCount}</span></Link>
                        <Link to="/cart"><BiCart className="relevanticons" /><span className="cart-badge">{cartCount}</span></Link>
                        <Link to="/my-account"><BiUser className="relevanticons" /></Link>
                        {toggleNav ? <HiX className="relevanticons menu" onClick={showMenu} /> : <BiMenu className="relevanticons menu" onClick={showMenu} />}
                    </div>
                </div >
            </header>
        </>
    )

}

export default Header