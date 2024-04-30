import styles from './bany.module.css';
const Bany = () => {
  
  return(
<div className={styles.wrap} id='bany'>
  <div className={styles.block}>
  <div className={styles.title}>РУССКАЯ БАНЯ</div>
  <div className={styles.titledoprow}>на дровах</div>
  <div className={styles.titledoprow}>с бассейном</div>
  </div>
  <div className={styles.flexButtons}>
  <button className={styles.buttonMore}>Смотреть фото</button>
  <button className={styles.button}>Забронировать</button>
  </div>
</div>
  );
}
export default Bany;