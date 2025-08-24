import styles from './Footer.module.css'
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";
  return (
    <footer id="footer"   className={`${styles.container} ${isHome ? styles.home : styles.other}`}
   >
      
       <p> &copy; {new Date().getFullYear()} La Sublimeuse – Tous droits réservés</p>
    </footer>
  )
}

export default Footer