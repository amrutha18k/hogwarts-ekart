//navbar
import './navbar.css';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export function SearchBar({searchInput,setSearchInput,setText}){
    return (
        <div className="search-bar">
            <input className="search-input"type="text" placeholder="Search magical items" 
                value={searchInput}
                onChange={
                    (event)=>setSearchInput(event.target.value)
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setText(searchInput);
                        setSearchInput("");
                    }
                }}
                >
            </input>
            <button className="search-button" onClick={
                () => {
                    setText(searchInput)
                    setSearchInput("")       
                }
            }
            >
                <img className="search-icon" src="/search_logo.jpg"></img>
            </button>
        </div>
    );
}

function CartIcon(){
    return (
        <div className="cart-icon-container">
            <HashLink smooth to="/cart" className="cart-link">
                <img className="cart-icon" src="/cart_logo.png" alt="Cart-logo"></img>
                <span>Cart</span>
            </HashLink>
        </div>
    );
}

export function Navbar({searchInput,setSearchInput,setText}){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="navbar">
            
                <HashLink smooth to="/" className="logo-link">
                    <img className="logo" src="/diagon_logo.png" alt="Diagon Kart Logo"  />
                </HashLink>
           
           
                <span><HashLink smooth to="/" className="nav-link">
                    Home
                </HashLink></span>
                <span><Link to="/shop"  className="nav-link">Shop</Link></span>
                <HashLink smooth to="/#about" className="nav-link">
                    About
                </HashLink>
                <Link  to="/explore" className="nav-link">
                    <span>Explore</span>
                </Link>
                
                <SearchBar searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    setText={setText} 
                />
            
            
                <CartIcon />
                <span>Login</span>
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            
        </div>
        {menuOpen && (
            <div className="mobile-menu">

                <HashLink
                    smooth
                    to="/"
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </HashLink>

                <Link
                    to="/shop"
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                >
                    Shop
                </Link>

                <HashLink
                    smooth
                    to="/#about"
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </HashLink>

                <Link
                    to="/cart"
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                >
                    Cart
                </Link>

            </div>
        )}
        </>
    );
}