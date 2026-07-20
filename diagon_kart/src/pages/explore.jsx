import "../explore.css";
import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Link } from "react-router-dom";
import diagonMap from "/diagon_alley_map.png";

const shops = [
  {
    name: "Ollivanders",
    category: "Wands",
    icon: "🪄",
    desc: "The wand chooses the wizard."
  },
  {
    name: "Flourish & Blotts",
    category: "Spell Books",
    icon: "📚",
    desc: "Magical books and knowledge."
  },
  {
    name: "Madam Malkin's",
    category: "Robes",
    icon: "👗",
    desc: "Robes for every witch and wizard."
  },
  {
    name: "Potage's Cauldron Shop",
    category: "Potions",
    icon: "🧪",
    desc: "Everything for potion making."
  },
  {
    name: "Quality Quidditch Supplies",
    category: "Quidditch",
    icon: "🧹",
    desc: "Professional Quidditch gear."
  },
  {
    name: "Eeylops Owl Emporium",
    category: "Creatures",
    icon: "🦉",
    desc: "Find your magical companion."
  },
  {
    name: "Weasleys' Wizard Wheezes",
    category: "Weasley's WW",
    icon: "🎉",
    desc: "The best magical jokes in Britain."
  }
];

export function Explore() {
  return (
    <>
      <Navbar />

      <div className="explore">
            <div className="explore-content">

                <h1>Explore Diagon Alley</h1>

                <p>
                Wander through the most magical shopping street and
                choose where you'd like to visit.
                </p>

                <img
                src={diagonMap}
                alt="Diagon Alley"
                className="map"
                />

                <div className="shop-grid">

                {shops.map(shop => (

                    <Link
                    key={shop.name}
                    to="/shop"
                    state={{ category: shop.category }}
                    className="shop-box"
                    >

                    <div className="icon">{shop.icon}</div>

                    <h2>{shop.name}</h2>

                    <p>{shop.desc}</p>

                    <span>Visit Shop →</span>

                    </Link>

                ))}

                </div>
          </div>
      </div>

      <Footer />
    </>
  );
}