//navbar
import './navbar.css';

function SearchBar(){
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
            <img className="logo" src="/diagon_logo.png" alt="Diagon Kart Logo"  />
            <span>Home</span>
            <span>Shop</span>
            <span>About</span>
            <span>Categories</span>
            <SearchBar />
            <CartIcon />
            <span>Login</span>
        </div>
    );
}