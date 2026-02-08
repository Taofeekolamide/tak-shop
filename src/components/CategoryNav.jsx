import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function CategoryNav({ icon, text, link }) {
    return (
        <>
            <Link to={`category/${link}`}>
                <div className="categorynav" >
                    <span>{icon}</span>
                    <p>{text}</p>
                    <BiChevronRight fontSize="25px" />
                </div>
            </Link>
        </>
    )
}

export default CategoryNav;