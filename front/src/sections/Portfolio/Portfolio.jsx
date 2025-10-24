import { useState } from 'react';
import styles from './PortFolioStyles.module.css';
import PortfolioCard from '../../components/PortfolioCard';
import zoomIcon from "../../assets/loupe1.png";

function PortFolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  // images public/portfolio
  const imageNames = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p6.jpg',
   
  ];
  const images = imageNames.map(name => `/portfolio/${name}`);

  const handleImageClick = (src) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div id="portfolio" className={styles.container}>
      <div className={styles.portfolioContainer} style={{ "--zoom-icon": `url(${zoomIcon})` }}>
        {images.map((url, index) => (
          <div className={styles.card} key={index} onClick={() => handleImageClick(url)}>
            <PortfolioCard source={url} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={selectedImage} alt="Aperçu" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  );
}

export default PortFolio;
