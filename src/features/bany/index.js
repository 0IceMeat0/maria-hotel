import styles from './bany.module.css';
const Bany = () => {
  
  return(
<div className={styles.wrap} id='bany'>
  <div className={styles.block}>
  <div className={styles.title}>РУССКАЯ БАНЯ</div>
  <div>на дровах</div>
  <div>с бассейном</div>
  </div>
  <button className={styles.buttonMore}>Смотреть фото</button>
  <button className={styles.button}>Забронировать</button>
</div>
  );
}
export default Bany;