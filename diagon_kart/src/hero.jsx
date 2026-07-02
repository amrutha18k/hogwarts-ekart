//hero section
import './hero.css';

function HeroButtons(){
    return (
        <div className="hero-buttons">
            <button className="hero-button">Explore Diagon Alley</button>
            <button className="hero-button">Shop Now</button>
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