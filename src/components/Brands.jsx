import { Link } from "react-router-dom"

function Brand({ title }) {
    return (
        <>
            <Link to={`brand/${title}`}>
                <div className="brand">
                    <h1>{title}</h1>
                </div>
            </Link>

        </>
    )
}

export default Brand