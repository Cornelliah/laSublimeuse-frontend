import { useState } from 'react';
import styles from './PortFolioStyles.module.css';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import PortfolioCard from '../../components/PortfolioCard';

function PortFolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div id="portfolio" className={styles.container}>

      <div className={styles.portfolioContainer}>
        
        <div onClick={() => handleImageClick(p1)}>
          <PortfolioCard source={p1} />
        </div>
        <div onClick={() => handleImageClick(p2)}>
          <PortfolioCard source={p2} />
        </div>
        <div onClick={() => handleImageClick(p3)}>
          <PortfolioCard source={p3} />
        </div>
        <div onClick={() => handleImageClick(p5)}>
          <PortfolioCard source={p5} />
        </div>
        <div onClick={() => handleImageClick(p6)}>
          <PortfolioCard source={p6} />
        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={selectedImage} alt="Aperçu" className={styles.lightboxImage} />
        </div>
        
      )}
    </div>
  )
}

export default PortFolio;
