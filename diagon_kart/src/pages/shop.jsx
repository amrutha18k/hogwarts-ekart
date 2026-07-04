import {Navbar} from '../navbar.jsx';
import {Footer} from '../footer.jsx';
import {useState} from "react";
import '../App.css';
import '../navbar.css';
import '../footer.css';
//import {SearchBar} from '../navbar.jsx'
import '../shop.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import {products} from "../data/products.js"



const categories = [
    "All",
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

function CatogoriePane({setSelectedCat,selectedCat}){
    return(
        <div className="catogories-cnt">
            {categories.map(category => (
                <button key={category} className={
                    selectedCat===category
                        ?"cat-active"
                        :"cat-btn"
                }onClick={
                    ()=>{
                        setSelectedCat(category);
                    }
                }>
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
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }
  // Half star
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} />);
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

function ProductCart({text,selectedCat}){
    let filteredProducts=products;
    if (selectedCat !== "All") {
        filteredProducts = filteredProducts.filter(product =>
            product.category.some(cat =>
                cat.toLowerCase() === selectedCat.toLowerCase()
            )
        );
    }
    if (text !== "") {
        filteredProducts = filteredProducts.filter(product =>
            product.category.some(cat =>
                cat.toLowerCase() === text.toLowerCase()
            )
        );
    }

    if(filteredProducts.length===0){
        return(
            <div className='no-prod'>
                <h1>Oops! No products available in this category right now! Check after few days! :)</h1>
                <h1>Or try changing the word you searched.</h1>
            </div>
        );
    }

    
    return(
    <>
        {filteredProducts.map((product)=>{
            return (
                <div className="product-cnt" key={product.id}>
                    <div className="product-img-cnt">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <RatingStars rating={product.rating} />
                    <BuyButtons />
                </div>
            );
        })}
    </>
    );
}

function Shop(){
    let [selectedCat,setSelectedCat]=useState("All");
    let [text,setText]=useState("");
    const [searchInput, setSearchInput] = useState("");

    return(
        <>
            <Navbar searchInput={searchInput}
                    setSearchInput={setSearchInput} 
                    setText={setText} 
            /> 
            <div className="shop-cnt">
                <CatogoriePane setSelectedCat={setSelectedCat} selectedCat={selectedCat}/>
                <div className="products-cnt">
                    <ProductCart text={text}selectedCat={selectedCat}/>
                </div>
            </div>
            <Footer />        
        </>
    );
}
export default Shop