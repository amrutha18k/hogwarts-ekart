import {Navbar} from '../navbar.jsx';
import { Footer } from '../footer.jsx';
import '../cart.css';
import '../shop.css';
import {Quantity} from './productDetails.jsx';

function ProductCart({cart}){
    if(cart.length!==0){
        return (
            cart.map((product)=>{
                return (
                    <div className="product-cnt" >
                       <div className="product-img-cnt">
                            <img src={product.img} alt={product.name} />
                        </div>
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                        <p className="product-description">{product.description}</p> 
                        <Quantity det={true}/> 
                        <button>Remove Item</button>               
                    </div>
                );
            })
    );
    }
}

export function Cart({cart}){
    return (
        <>
            <Navbar />
            <div className="cart-pg">
                <div className="para">
                    <span>Your Cart</span>
                    <p>{cart.length===0?"You cart is empty! :)":`You have ${cart.length} magical items waiting for you! ✨`}</p>
                </div>
                <div className="products-cnt">
                    <ProductCart cart={cart} />
                </div>
            </div>
            <Footer />
        </>
    );
}