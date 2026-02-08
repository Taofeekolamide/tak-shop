import './App.css'
import '../src/Styles/Home.css'
import '../src/Styles/Shop.css'
import '../src/Styles/Single.css'
import '../src/Styles/Cart.css'
import '../src/Styles/Checkout.css'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import Footer from './components/Footer';
import ProdunctDetails from './pages/ProductDetails';
import LoggedIn from './Context/LoggedIn'
import { useState } from 'react'
import NavToggle from './Context/NavToggle'
import MobileNav from './components/MobileNav'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <>
      <NavToggle.Provider value={{ toggleNav, setToggleNav }}>
        <LoggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }} >
          <Header />
          <MobileNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProdunctDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-account" element={<MyAccount />} >
              <Route path="dashboard" element={<Home />} />
              <Route path="orders" element={<Home />} />
            </Route>
          </Routes>

          <Footer />

        </LoggedIn.Provider>
      </NavToggle.Provider>


    </>
  )
}

export default App