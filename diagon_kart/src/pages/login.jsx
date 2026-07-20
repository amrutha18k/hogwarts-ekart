import "../login.css";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Link } from "react-router-dom";


export function Login(){
    return(
        <>
            <Navbar/>
            <div className="cls-name">
                <h1>🔐 Login</h1>

                <h1>Coming Soon!</h1> 

                <h2>Diagon Kart accounts are still under construction.</h2>
                <Link to="/explore" className="nav-link">
                    <button className="login-btn">Continue Exploring</button>
                </Link>
            </div>
            <Footer/>
        </>
    );
}