import { useParams } from "react-router-dom";
import {products} from '../data/products.js';
import {Navbar} from '../navbar.jsx';
import {Footer} from '../footer.jsx';
import '../productDetails.css';
import {BuyButtons} from './shop.jsx';
import {RatingStars} from './shop.jsx';
import {useState} from 'react';

export function QuantitySelector({det=false,quantity,setQuantity}){
    return (
        <div className={det?"qty-cnt":"quantity-cnt"}>
            <button className={det?"qty-btn":"quantity-btn"} onClick={()=>{quantity>1?setQuantity(prev=>prev-1):alert('not enough quantity!!')}}>-</button>
            <input className={det?"qty-inp":"quantity-input"} type="number" value={quantity}  readOnly />
            <button className={det?"qty-btn":"quantity-btn"} onClick={()=>{setQuantity(prev=>prev+1);}}>+</button>
        </div>
    );
}

function Product({product,addToCart}){
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="prod-det">
            <div className="image-box">
                <img className="prod-det-img"src={product.img}></img>
            </div>
            <div className="prod-det-list">
                <div className="det">
                    <p className="prod-name">{product.name}</p>
                    <RatingStars rating={product.rating} det={true}/>
                    <p className="prod-price">{product.price}</p>
                </div>
                <div className="prod-info">
                    <h3>Description</h3>
                    <p>{product.longdescription}</p>
                </div>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                <BuyButtons detailed={true} product={product} addToCart={addToCart} quantity={quantity} />
            </div>
        </div>
    );
}

export function ProductDetails({addToCart}){
    let {id}=useParams();
    let product=products.find(prod=>
        {
            return prod.id==Number(id)
        });
    return (
        <>
            <Navbar />
            <div className="prod-det-cnt">
                <Product product={product} addToCart={addToCart}/>
            </div>
            <Footer />
        </>
    );
}