import "./footer.css";
import { HashLink } from "react-router-hash-link";


export function Footer() {
    return (
        <footer className="footer">

            <div className="footer-logo">
                <h2>⚡ DIAGON KART</h2>
                <p>Crafted with curiosity, code, and a little bit of magic.</p>
            </div>

            <div className="footer-links">

                <span><HashLink smooth to="/" className="nav-link">
                    Home
                </HashLink></span>
                <a href="/shop">Shop</a>
                 <HashLink smooth to="/#about" className="nav-link">
                    About
                </HashLink>

                <a
                    href="https://github.com/amrutha18k"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/k185amruthasai/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a href="mailto:konthamamruthasai@gmail.com">
                    Email
                </a>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Diagon Kart • Designed & Developed by Amrutha Sai
                </p>

                <p className="ending-footer">
                    Mischief Managed ⚡
                </p>

            </div>

        </footer>
    );
}