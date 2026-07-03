import {Navbar} from '../navbar.jsx';
import {Footer} from '../footer.jsx';
import '../App.css';
import '../navbar.css';
import '../footer.css';
//import {SearchBar} from '../navbar.jsx'
import '../shop.css'
import trunkBox from "../assets/products/trunk-box.jpg";

const categories = [
    "New Arrivals",
    "Best Sellers",
    "Weasley's WW",
    "Wands",
    "Robes",
    "Spell Books",
    "Potions",
    "Creatures",
    "Quidditch",
    "Limited"
];

function CatogoriePane(){
    return(
        <div className="catogories-cnt">
            {categories.map(category => (
                <button key={category}>
                    {category}
                </button>
            ))}
        </div>
    );
}


function Quantity(){
    return (
        <div className="quantity-cnt">
            <button className="quantity-btn">-</button>
            <input className="quantity-input" type="number" defaultValue={1} min="1" max="10" />
            <button className="quantity-btn">+</button>
        </div>
    );
}

function RatingStars({ rating }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return (
    <div className="rating-stars">
        {stars}
        <p>{rating}/5</p>
        <Quantity />
    </div>
  );
}


function BuyButtons(){
    return(
        <div className="buy-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
    );
}

function Product(){
    return(
        <div className="product-cnt">
            <div className="product-img-cnt">
                <img src={trunkBox} alt="Trunk Box" />
            </div>
            <p className="product-name">Trunk Box</p>
            <p className="product-price">Rs.1200</p>
            <p className="product-description">A wooden suitcase style box with a carrying handle and removable shoulder strap</p>
            <RatingStars rating={4} />
            <BuyButtons />
        </div>
    );
}

function Shop(){
    return(
        <>
            <Navbar /> 
            <div className="shop-cnt">
                <CatogoriePane />
                <div className="products-cnt">
                    <div className="products-row">
                        <Product />
                    </div>
                </div>
            </div>
            <Footer />        
        </>
    );
}
export default Shop