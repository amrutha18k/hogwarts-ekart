//hero section
import './hero.css';
import { Link } from "react-router-dom";

function HeroButtons(){
    return (
        <div className="hero-buttons">
            <Link to="/explore">
                <button className="hero-button">Explore Diagon Alley</button>
            </Link>
            <Link to="/shop">
                <button className="hero-button">Shop Now</button>
            </Link>
        </div>
    );
}

export function Hero(){
    return(
        <div className="hero-cnt">
            <div className="hero-content">
                <h1>Magic, Delivered to Your Phone.</h1> 
                <h2>Discover enchanted wands, magical creatures, spell books, robes, potions, and timeless wizarding treasures from the most beloved magical marketplace.</h2>
                <HeroButtons />
            </div>
        </div>
    );
}