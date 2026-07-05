import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import './App.css';
import Shop from "./pages/shop.jsx";
import {ProductDetails} from "./pages/productDetails.jsx"

function App(){
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />}/>
        </Routes>
    ); 
    
}

export default App;