import { useState } from 'react';
import styles from './ServicesStyles.module.css';
import i1 from '../../assets/1.png';
import i2 from '../../assets/2.png';
import i3 from '../../assets/3.png';


function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
       <p className={styles.description}>La Sublimeuse vous propose des prestations de maquillage adaptées à toutes vos occasions spéciales.
       Que vous recherchiez un style naturel, élégant ou sophistiqué, chaque mise en beauté est réalisée avec soin afin de révéler votre éclat unique.
       Découvrez nos différentes formules ainsi que nos conditions de réservation, et laissez-vous sublimer par une expérience beauté sur mesure.
        </p>

        <div className={styles.gridContainer}>

          <div  className={styles.item} onClick={() => handleImageClick(i1)}>
             <img  src={i1} alt=""/>
          </div>
          <div className={styles.item} onClick={() => handleImageClick(i2)}>
              <img  src={i2} alt=""/>  
          </div>
          <div className={styles.item} onClick={() => handleImageClick(i3)}>
              <img  src={i3} alt=""/>
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

export default Services