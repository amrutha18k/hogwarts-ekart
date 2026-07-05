import { useParams } from "react-router-dom";
import {products} from '../data/products.js';
import {Navbar} from '../navbar.jsx';
import {Footer} from '../footer.jsx';
import '../productDetails.css';
import {BuyButtons} from './shop.jsx';
import {RatingStars} from './shop.jsx';

function Quantity(){
    return (
        <div className="quantity-cnt">
            <button className="quantity-btn">-</button>
            <input className="quantity-input" type="number" defaultValue={1} min="1" max="10" />
            <button className="quantity-btn">+</button>
        </div>
    );
}

function Product({product,addToCart}){
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
                <Quantity />
                <BuyButtons detailed={true} product={product} addToCart={addToCart}/>
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