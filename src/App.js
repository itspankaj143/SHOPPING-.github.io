import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./components/Footer";

import men_banner from '../src/webImages/BoyBanner1.jpg'
import women_banner from '../src/webImages/Girl Banner4.jpg'
import kid_banner from '../src/webImages/KidsSouledStore.jpg'
import ProductInfo from "./pages/ProductInfo";
import ShopContextProvider from './Context/ShopContext';
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <>
  <CartProvider>
    <ShopContextProvider>
      <Router>
        <NavbarComp />
      
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path="/productInfo" element={<ProductInfo/>} />
          <Route path="/productInfo/:id" element={<ProductInfo/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </Router>
      
     
      </ShopContextProvider>
      </CartProvider>
    </>
  );
}

export default App;   