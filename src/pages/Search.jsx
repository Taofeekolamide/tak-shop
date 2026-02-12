import { useSearchParams } from "react-router-dom";
import PageBanners from "../components/PageBanners";
import { useEffect, useState } from "react";
import ProductOne from "../components/ProductOne";

function Search() {
    const [search] = useSearchParams()
    const result = search.get("q")
    const [searched, setSearched] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${result}`)
            .then(res => res.json())
            .then(data => setSearched(data.products))
    }, [result])

    return (
        <>
            <PageBanners title="Search" page={result} />
            {searched.length > 0 ?
                <div className="search">
                    {searched.map((item) => (
                        <ProductOne image={item.thumbnail} name={item.title} sale={item.discountPercentage} price={item.price} detail={item.id} />
                    ))}
                </div>
                :
                <div style={{ textAlign: "center", padding: "90px 0px" }}>
                    <h1 >No product found...</h1>
                </div>
            }
        </>
    )


}

export default Search;