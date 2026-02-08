import { useState, useEffect } from "react";
import CategoryNav from "../components/CategoryNav";
import ImageBox from "../components/ImageBox";
import service1 from "../images/service1.png"
import service2 from "../images/service2.png"
import service3 from "../images/service3.png"
import service4 from "../images/service4.png"
import service5 from "../images/service5.png"
import { FaArrowRight } from "react-icons/fa";
import { BiUser, BiBasket } from "react-icons/bi";
import ProductOne from "../components/ProductOne";
import SubHeading from "../components/SubHeading";
import Brand from "../components/Brands";
import { Link } from "react-router-dom";
import ProductTwo from "../components/ProductTwo";

function Home() {

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
                <div className="catlist">
                    <CategoryNav text="Beauty" icon={<BiUser />} link="beauty"/>
                    <hr />
                    <CategoryNav text="Electronics" icon={<BiUser />} link="electronics" />
                    <hr />
                    <CategoryNav text="Fashion (Women)" icon={<BiUser />} link="fashion-women" />
                    <hr />
                    <CategoryNav text="Fashion (Men)" icon={<BiUser />} link="fashion-men" />
                    <hr />
                    <CategoryNav text="Home & Living" icon={<BiUser />} link="Home-Living" />
                    <hr />
                    <CategoryNav text="Groceries" icon={<BiUser />} link="gorceries" />
                    <hr />
                    <CategoryNav text="Sport Accessories" icon={<BiUser />} link="sport-ccessories" />
                    <hr />
                    <CategoryNav text="Automotive & Vehicles" icon={<BiUser />} link="automotive-vehicles" />
                </div>
                <div className="heroside">

                    <h1 className="title">TakShop</h1>
                    <h1 className="content">Discover quality products at unbeatable prices. From electronics to fashion, everything you need in one place.</h1>
                    <Link to="/shop"><button>Shop Now <FaArrowRight /></button></Link>

                </div>
            </div>

            <div className="homeimagebox">
                <ImageBox text="Fast & Secure Delivery" image={service1} />   <ImageBox text="100% Guarantee On Product" image={service2} />
                <ImageBox text="24 Hour Return Policy" image={service3} />
                <ImageBox text="24 Hour Return Policy" image={service4} />
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