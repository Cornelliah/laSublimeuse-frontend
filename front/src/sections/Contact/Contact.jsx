import { useState } from 'react';
import styles from './ContactStyles.module.css';
import insta from '../../assets/instagram.png';
import facebook from '../../assets/face1.png';
import whatsapp from '../../assets/whatsapp.png';
import tiktok from '../../assets/tiktok.png';
import logo from '../../assets/logo.png';
import { FaRegCopy } from 'react-icons/fa';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [copyMessage, setCopyMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/lasublimeuse/reservation'
    });
  }
};


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleCopy = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      setCopyMessage(`Copié !`);
      setTimeout(() => setCopyMessage(''), 2000); 
    })
    .catch(() => {
      setCopyMessage('Impossible de copier');
      setTimeout(() => setCopyMessage(''), 2000);
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('sujet', formData.sujet);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://formspree.io/f/mwpnkrgk', {
        method: 'POST',
        body: form,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', sujet: '', message: '' });
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  }

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contactez La Sublimeuse</h1>

      <p className={styles.subtitle}>
        Pour toute demande d'information, de réservation ou de collaboration, je suis à votre écoute.
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.leftCol}>
          
          <div className={styles.infoGrid}>

            <div className={styles.card}>
              <h3>Email</h3>
              <p>contactlasublimeuse@ <br />gmail.com
                <FaRegCopy 
                className={styles.copyIcon} 
                 onClick={() => handleCopy('contactlasublimeuse@gmail.com')} />
              </p>
            </div>
            <div className={styles.card} >
              <h3>Téléphone</h3>
              <p>+221 78 530 95 52
                 <FaRegCopy 
                   className={styles.copyIcon} 
                   onClick={() => handleCopy('+221785309552')} />
              </p>
            </div>
             {copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>}
            <div className={styles.card}>
              <h3>Adresse</h3>
              <p>Dakar, Sénégal</p>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/la_sublimeuse01/" target="_blank" rel="noreferrer">
              <img src={insta} alt="insta" className={styles.reseau} />
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1FVhTuqSfq/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" className={styles.reseau1} />
              Facebook
            </a>
            <a href="https://www.tiktok.com/@la_sublimeuse01" target="_blank" rel="noreferrer">
              <img src={tiktok} alt="tiktok" className={styles.reseau1} />
              TikTok
            </a>
            <a href="https://wa.me/221785309552" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="whatsapp" className={styles.reseau1} />
              WhatsApp
            </a>
          </div>
            <a href="#"   onClick={(e) => {  e.preventDefault();  openCalendly();  }} className={styles.calendlyLink}>
                  Prendre un rendez-vous 
            </a>           
        </div>

        {submitted ? (
          <div className={styles.thankYou}>
            <h2>Merci ! Votre message a été envoyé.</h2>
            <br />
            <button onClick={() => setSubmitted(false)}>Retour au formulaire</button>
          </div>
        ) : (
             <div >
                 <h2> Formulaire de Contact </h2>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <img src={logo} alt="logo la sublimeuse" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="sujet"
                      placeholder="Sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                    />
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <button type="submit">Envoyer</button>
                  </form>
             </div>
        
        )}
      </div>
    </div>
  );
}

export default Contact;
