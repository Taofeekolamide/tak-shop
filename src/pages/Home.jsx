import { useState, useEffect } from "react";
import CategoryNav from "../components/CategoryNav";
import ImageBox from "../components/ImageBox";
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/service3.png"
import service5 from "../images/service5.png"
import { FaArrowRight } from "react-icons/fa";
import { BiUser, BiBasket } from "react-icons/bi";
import ProductOne from "../components/ProductOne";
import SubHeading from "../components/SubHeading";
import Brand from "../components/Brands";
import { Link } from "react-router-dom";
import ProductTwo from "../components/ProductTwo";

function Home() {
    const [open, setOpen] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    })

    const toggle = (key) => {
        switch (key) {
            case "one":
                !open.one ? setOpen({ one: true }) : setOpen({ one: false })
                break;
            case "two":
                !open.two ? setOpen({ two: true }) : setOpen({ two: false })
                break;
            case "three":
                !open.three ? setOpen({ three: true }) : setOpen({ three: false })
                break;
            case "four":
                !open.four ? setOpen({ four: true }) : setOpen({ four: false })
                break;
            case "five":
                !open.five ? setOpen({ five: true }) : setOpen({ five: false })
                break;
            case "six":
                !open.six ? setOpen({ six: true }) : setOpen({ six: false })
                break;
            case "seven":
                !open.seven ? setOpen({ seven: true }) : setOpen({ seven: false })
                break;
            case "eight":
                !open.eight ? setOpen({ eight: true }) : setOpen({ eight: false })
                break;
        }
    }


    const [product, setProducts] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))

        fetch("https://dummyjson.com/products?limit=100")
            .then(res => res.json())
            .then(data => {
                const list = data.products.map(p => p.brand);
                setBrands([...new Set(list)])
            })
    }, [])

    const topRated = product.filter((item) => (item.rating > 4.5))

    return (
        <>
            <div className="homehero">
                <div className="categorylist" style={{ display: open.one ? "flex" : "none" }}>
                    <Link to="/category/beauty"><h1>Beauty |</h1></Link>
                    <Link to="/category/fragrances"><h1>Fragrances |</h1></Link>
                    <Link to="/category/skin-care"><h1>Skin Care</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.two ? "flex" : "none" }}>
                    <Link to="/category/smartphones"><h1>Smart |</h1></Link>
                    <Link to="/category/laptops"><h1>Laptops |</h1></Link>
                    <Link to="/category/tablets"><h1>Tablets |</h1></Link>
                    <Link to="/category/mobile-accessories"><h1>Mobile Assessories</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.three ? "flex" : "none" }}>
                    <Link to="/category/womens-dresses"><h1>Women Dresses |</h1></Link>
                    <Link to="/category/womens-shoes"><h1>Women Shoes |</h1></Link>
                    <Link to="/category/womens-bags"><h1>Women Bags</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.four ? "flex" : "none" }}>
                    <Link to="/category/mens-shirts"><h1>Mens Shirts |</h1></Link>
                    <Link to="/category/mens-shoes"><h1>Mens Shoes |</h1></Link>
                    <Link to="/category/mens-watches"><h1>Mens Watches</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.five ? "flex" : "none" }}>
                    <Link to="/category/furniture"><h1>Furniture |</h1></Link>
                    <Link to="/category/home-decoration"><h1>Home Decoration |</h1></Link>
                    <Link to="/category/kitchen-accessories"><h1>Kitchen Accessories</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.six ? "flex" : "none" }}>
                    <Link to="/category/groceries"><h1>Groceries</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.seven ? "flex" : "none" }}>
                    <Link to="/category/sports-accessories"><h1>Sport Accessories |</h1></Link>
                    <Link to="/category/sunglasses"><h1>Sunglasses</h1></Link>
                </div>
                <div className="categorylist" style={{ display: open.eight ? "flex" : "none" }}>
                    <Link to="/category/motorcycle"><h1>Motorcycle |</h1></Link>
                    <Link to="/category/vehicle"><h1>Vehicle</h1></Link>
                </div>


                <div className="catlist">
                    <CategoryNav text="Beauty" icon={<BiUser />} link="beauty" onClick={() => toggle("one")} />
                    <hr />
                    <CategoryNav text="Electronics" icon={<BiUser />} link="electronics" onClick={() => toggle("two")} />
                    <hr />
                    <CategoryNav text="Fashion (Women)" icon={<BiUser />} link="fashion-women" onClick={() => toggle("three")} />
                    <hr />
                    <CategoryNav text="Fashion (Men)" icon={<BiUser />} link="fashion-men" onClick={() => toggle("four")} />
                    <hr />
                    <CategoryNav text="Home & Living" icon={<BiUser />} link="Home-Living" onClick={() => toggle("five")} />
                    <hr />
                    <CategoryNav text="Groceries" icon={<BiUser />} link="gorceries" onClick={() => toggle("six")} />
                    <hr />
                    <CategoryNav text="Sport Accessories" icon={<BiUser />} link="sport-ccessories" onClick={() => toggle("seven")} />
                    <hr />
                    <CategoryNav text="Automotive & Vehicles" icon={<BiUser />} link="automotive-vehicles" onClick={() => toggle("eight")} />
                </div>
                <div className="heroside">

                    <h1 className="title">TakShop</h1>
                    <h1 className="content">Discover quality products at unbeatable prices. From electronics to fashion, everything you need in one place.</h1>
                    <Link to="/shop"><button>Shop Now <FaArrowRight /></button></Link>

                </div>
            </div>

            <div className="homeimagebox">
                <ImageBox text="Fast & Secure Delivery" image={service1} />
                <ImageBox text="100% Guarantee On Product" image={service2} />
                <ImageBox text="24 Hour Return Policy" image={service3} />
                <ImageBox text="Next Level Pro Quality" image={service5} />
            </div>

            <SubHeading icon={<BiBasket />} text="This week" heading="Top Rated" />
            <div className="toprated">
                {topRated.slice(0, 5).map((item) => (
                    <ProductOne detail={`/${item.id}`} image={item.thumbnail} price={item.price} name={item.title} sale={item.discountPercentage} />
                ))}
            </div>

            <SubHeading icon={<BiBasket />} text="Brands" heading="Our Top Brands" />
            <div className="brands">
                {brands.slice(0, 14).map((item) => (
                    <Brand title={item} />
                ))}
            </div>

            <SubHeading icon={<BiBasket />} text="Our Products" heading="Explore our Products" />
            <div className="viewproducts">
                {product.slice(10, 20).map((item) => (
                    <ProductTwo detail={`/${item.id}`} image={item.thumbnail} price={item.price} name={item.title} sale={item.discountPercentage} />
                ))}
            </div>

            <SubHeading icon={<BiBasket />} text="This week" heading="New Arrivals" />
            <div className="viewproducts">
                {product.slice(product.length - 5, product.length).map((item) => (
                    <ProductOne detail={`/${item.id}`} image={item.thumbnail} price={item.price} name={item.title} sale={item.discountPercentage} />
                ))}
            </div>

        </>
    )
}

export default Home;