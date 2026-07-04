//navbar
import './navbar.css';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function SearchBar(){
    return (
        <div className="search-bar">
            <input className="search-input"type="text" placeholder="Search magical items"></input>
            <button className="search-button">
                <img className="search-icon" src="/search_logo.jpg"></img>
            </button>
        </div>
    );
}

function CartIcon(){
    return (
        <div className="cart-icon-container">
            <img className="cart-icon" src="/cart_logo.png" alt="Cart-logo"></img>
            <span>Cart</span>
        </div>
    );
}

export function Navbar(){
    return (
        <div className="navbar">
            <HashLink smooth to="/" className="nav-link">
                <img className="logo" src="/diagon_logo.png" alt="Diagon Kart Logo"  />
            </HashLink>
            <span><HashLink smooth to="/" className="nav-link">
                Home
            </HashLink></span>
            <span><Link to="/shop"  className="nav-link">Shop</Link></span>
            <HashLink smooth to="/#about" className="nav-link">
                About
            </HashLink>
            <span>Categories</span>
            <SearchBar />
            <CartIcon />
            <span>Login</span>
        </div>
    );
}