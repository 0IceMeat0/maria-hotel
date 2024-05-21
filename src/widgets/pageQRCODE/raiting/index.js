import styles from './raiting.module.css'
import lady from '../../../shared/assets/img/zlo.jpg'
const Activities = () => {


  return(
    <div className={styles.wrap}>
        <img src={lady} className={styles.img} alt=''/>
        <h3 className={styles.title}>Вам все нравится у нас?</h3>
        <div className={styles.text}>Если что-то пошло не так, дайте нам знать. Мы хотим оставить только приятные воспоминания от Вашего пребывания</div>
      <div className={styles.blockButton}><button className={styles.button}>Я в восторге</button> <button className={styles.button}>Есть проблемы</button></div>
    </div>
  );
}
export default Activities;