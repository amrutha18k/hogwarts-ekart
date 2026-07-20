import {Navbar} from '../navbar.jsx';
import {Footer} from '../footer.jsx';
import '../checkout.css';
import { Link } from "react-router-dom";

export function CheckOut(){
    return(
        <>
            <Navbar />
            <div className="checkout-pg">
                <div className="order-div">
                    <div className="order-p">
                        <span>🦉</span>
                        <p>Order Noted!</p>
                        <p>"The shopkeepers of Diagon Alley thank you for your visit. Until your next magical adventure!"</p>
                        <Link to="/shop">
                            <button>Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}