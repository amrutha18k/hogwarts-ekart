import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import './App.css';
import Shop from "./pages/shop.jsx";
import {ProductDetails} from "./pages/productDetails.jsx";
import {useState} from "react";
import {Cart} from './pages/cart.jsx';

function App(){

    const [cart,setCart]=useState([]);
    function addToCart(product) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
    ); 
    
}

export default App;