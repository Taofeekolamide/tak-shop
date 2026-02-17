import { BiBasket } from "react-icons/bi"
import SubHeading from "./SubHeading"

function ImageSection({ img, text, heading, paragraph }) {
    return (
        <>
            <div className="imgSection">
                <img src={img} alt="" />
                <div>
                    <SubHeading text={text} heading={heading} icon={<BiBasket />} />
                    <p>{paragraph}</p>
                </div>
            </div>
        </>
    )
}

export default ImageSection