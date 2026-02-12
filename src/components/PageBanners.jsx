import { Link } from "react-router-dom"

function PageBanners({ title, page }) {
    return (
        <>
            <div className="pagebanners">
                <h1>{title}</h1>
                <p><Link to="/">Home</Link> / {page}</p>

            </div>
        </>
    )
}

export default PageBanners