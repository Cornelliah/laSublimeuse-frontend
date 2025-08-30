import { useEffect, useState } from 'react';
import styles from './PortFolioStyles.module.css';
import PortfolioCard from '../../components/PortfolioCard';
import zoomIcon from "../../assets/loupe1.png";

function PortFolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://lasublimeuse-backend.onrender.com/api/upload/files');
        const data = await res.json();

        if (data && data.length) {
          // ✅ Avec Cloudinary, on récupère directement l’URL publique
          const urls = data.map(img => img.url);
          setImages(urls);
        } else {
          console.warn('Aucune image trouvée dans la Media Library');
        }
      } catch (err) {
        console.error('Erreur fetch images', err);
      }
    };

    fetchImages();
  }, []);

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
