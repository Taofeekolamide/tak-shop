import { BiChevronRight } from "react-icons/bi";

function CategoryNav({ icon, text, onClick }) {
    return (
        <>
            <div onClick={onClick} className="categorynav" >
                <span>{icon}</span>
                <p>{text}</p>
                <BiChevronRight fontSize="25px" />
            </div >
        </>
    )
}

export default CategoryNav;