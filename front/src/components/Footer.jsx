import styles from './Footer.module.css'
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";
     const isAdmin = true;
  return (
    <footer id="footer"   className={`${styles.container} ${isHome ? styles.home : styles.other}`}
   >
      
       <p> &copy; {new Date().getFullYear()} La Sublimeuse – Tous droits réservés</p>
      {isAdmin && (
        <p>
          <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer">
            Admin Login
          </a>
        </p>
      )}    
      </footer>
  )
}

export default Footer