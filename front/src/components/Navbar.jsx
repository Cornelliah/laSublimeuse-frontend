import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${isHome ? styles.home : styles.other}`}>
     
      {!isHome && <h1 className={styles.logo}> La Sublimeuse</h1>}

      {/* Menu*/}
      <ul className={styles.menu}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

   
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Menu mobile */}
       <div className={`${styles.overlay} ${!isOpen ? styles.hidden : ""}`} onClick={closeMenu}></div>
      { isOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMenu}>Accueil</Link>
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
