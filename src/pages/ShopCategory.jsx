import { useEffect, useState } from "react"
import ProductTwo from "../components/ProductTwo"
import PageBanners from "../components/PageBanners"
import { useParams } from "react-router-dom"

function ShopCategory() {
    const { id } = useParams()
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${id}?limit=194`)
            .then(res => res.json())
            .then(data => setItems(data.products))
            .catch(error => setError(error.message))
    }, [id])

    if (error) {
        return (
            <div className="error">
                <h1>Failed fetching products...</h1>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        )
    }

    if (items.length == 0) {
        return <div className="error">
            <h1>No result found</h1>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    }

    return (
        <>

            <PageBanners title="Category" page={id} />

            <div className="shop">
                <div className="shopprod" >
                    {items.map((item) => (
                        <ProductTwo product={item} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default ShopCategory