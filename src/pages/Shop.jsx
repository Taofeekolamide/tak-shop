import { useEffect, useState } from "react"
import ProductTwo from "../components/ProductTwo"
import PageBanners from "../components/PageBanners"

function Shop() {
    const [items, setItems] = useState([])
    const [skip, setSkip] = useState(0)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
            .then(res => res.json())
            .then(data => setItems(data.products))
            .catch(error => setError(error.message))
    }, [skip])

    const prev = () => {
        skip >= 10 ? setSkip(skip - 10) : setSkip(skip)
    }

    const next = () => {
        skip < 190 ? setSkip(skip + 10) : setSkip(skip)

    }
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

            <PageBanners title="Shop" page="Shop" />

            <div className="shop">
                <div className="shopprod" >
                    {items.map((item) => (
                        <ProductTwo product={item} image={item.thumbnail} name={item.title}  price={item.price} sale={item.discountPercentage} />
                    ))}
                </div>
                <div className="shopnav">
                    <button onClick={prev}>Prev</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>

        </>
    )
}

export default Shop