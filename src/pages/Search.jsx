import { useSearchParams } from "react-router-dom";

function Search() {
    const [search] = useSearchParams()
    const result = search.get("q")


    return (
        <>
            <h1>{result}</h1>
        </>
    )
}

export default Search;