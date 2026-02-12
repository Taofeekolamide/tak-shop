import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useContext } from "react";
import NavToggle from "../Context/NavToggle";
import { BiCart, BiPhone } from "react-icons/bi";

function MobileNav() {
    const { toggleNav, setToggleNav } = useContext(NavToggle)

    return (
        <>
            <div className="mobilenav" style={{ transform: toggleNav ? "translateX(0%)" : "translateX(-100%)" }}>

                <h1 style={{ fontSize: "25px" }}><BiCart />&nbsp;TakShop</h1>
                <nav>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/"><HiHome /> Home</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/shop"><BiCart /> Shop</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/about"><FaUser /> About</Link>
                    <Link onClick={() => setToggleNav(!toggleNav)} to="/contact"><BiPhone /> Contact</Link>
                </nav>

            </div>

        </>
    )
}

export default MobileNav;