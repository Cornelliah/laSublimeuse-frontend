import styles from './HomeStyles.module.css';

function Home() {
  return (
    <div className={styles.hero} >
      <div className={styles.splitTextContainer}>
        <span className={`${styles.textPart} ${styles.left}`}>La</span>
        <span style={{ marginLeft: "0.3em" }} className={`${styles.textPart} ${styles.right}`}>Sublimeuse</span>
      </div>
      <h3 className={styles.soustitre}>MAKEUP ARTIST</h3>
    </div>
  )
}

export default Home;
