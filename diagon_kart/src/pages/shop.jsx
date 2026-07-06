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
import { Link } from "react-router-dom";


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

function CatogoriePane({setSelectedCat,selectedCat,setText}){
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
                        setText("");
                    }
                }>
                    {category}
                </button>
            ))}
        </div>
    );
}


export function RatingStars({ rating,det=false }) {
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
        <div className={det?"rat-det-star":"rating-stars"}>
            {stars}
            <p>{rating}/5</p>
        </div>
  );

}



export function BuyButtons({ detailed = false,product,addToCart}){
    return(
        <div className={detailed ? "buy-buttons detailed-buy" : "buy-buttons"}>
            <button className="add-to-cart" 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                    alert('Your item has been added to Cart. Click ok to continue')
                }}
            >Add to Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
    );
}

function ProductCart({text,selectedCat,addToCart}){
    let filteredProducts=products;
    if (selectedCat !== "All"&&selectedCat!=="Best Sellers") {
        filteredProducts = filteredProducts.filter(product =>
            product.category.some(cat =>
                cat.toLowerCase() === selectedCat.toLowerCase()
            )
        );
    }
    if (text !== "") {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase()) ||
            product.category.some(cat =>
                cat.toLowerCase().includes(text.toLowerCase())
            )
        );
    }

   if (selectedCat === "Best Sellers"||text==="top") {
        filteredProducts = [...filteredProducts].sort(
            (a, b) => b.rating - a.rating
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
                    <Link to={`/product/${product.id}`} className="product-link" key={product.id}>
                        <div className="product-cnt" >
                            <div className="product-img-cnt">
                                <img src={product.img} alt={product.name} />
                            </div>
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">Rs.{product.price}</p>
                            <p className="product-description">{product.description}</p>
                            <RatingStars rating={product.rating} />
                            <BuyButtons  product={product} addToCart={addToCart}/>
                        </div>
                    </Link>
            );
        })}
    </>
    );
}

function Shop({addToCart}){
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
                <CatogoriePane setSelectedCat={setSelectedCat} selectedCat={selectedCat} setText={setText}/>
                <div className="products-cnt">
                    <ProductCart text={text}selectedCat={selectedCat} addToCart={addToCart}/>
                </div>
            </div>
            <Footer />        
        </>
    );
}
export default Shop