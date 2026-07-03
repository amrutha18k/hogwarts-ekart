import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import './App.css';
import Shop from "./pages/shop";

function App(){
    return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
    ); 
    
}

export default App;