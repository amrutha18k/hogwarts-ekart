import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import './App.css';
import Shop from "./pages/shop.jsx";
import {ProductDetails} from "./pages/productDetails.jsx";
import {useState} from "react";
import {Cart} from './pages/cart.jsx';

function App(){

    const [cart,setCart]=useState([]);
    function addToCart(product,quantity) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: quantity }];
            }
        });
    }

    function removeFromCart(product){
        setCart(prevCart => {
            return prevCart.filter(item => item.id !== product.id);
        });
    }

    function addQuantity(product){
        setCart(prevCart=>{
                return prevCart.map(item=>{
                    if(product.id===item.id){
                        return{
                            ...item,
                            quantity: item.quantity+1
                        }
                    }else{
                        return item;
                    }
                });
        });
    }

    function subQuantity(product){
        setCart(prevCart=>{
            return prevCart.map(item=>{
                if(product.id===item.id){
                    if(item.quantity>1){
                        return{
                            ...item,
                            quantity:item.quantity-1
                        }
                    }else{
                        alert('cant remove item!');
                        return item;
                    }
                }else{
                    return item;
                }
            });
        });
    }

    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addQuantity={addQuantity} subQuantity={subQuantity} />} />
        </Routes>
    ); 
    
}

export default App;