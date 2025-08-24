import styles from './PortFolioStyles.module.css';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import PortfolioCard from '../../components/PortfolioCard';


function PortFolio() {
    
  return (
    <div id="portfolio" className={styles.container}>

        <div className={styles.portfolioContainer}>
             <PortfolioCard source={p1}  />
             <PortfolioCard source={p2} />
             <PortfolioCard source={p3} />
            <PortfolioCard source={p5} />
            <PortfolioCard source={p6} />




       </div>
    </div>

  )
}

export default PortFolio



  




  


