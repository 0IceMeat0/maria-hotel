import ButtonMore from '../../shared/ui/buttonMore/buttonMore';
import styles from './bany.module.css';
import bany from '../../shared/assets/img/bany.png'
import bany1 from '../../shared/assets/img/bany2.png'
import bany2 from '../../shared/assets/img/bany3.png'
const Bany = () => {
  const obj = {
    1: bany,
    2: bany1,
    3: bany2
  }
  return(
<div className={styles.wrap} id='bany'>
  <div className={styles.block}>
  <div className={styles.title}>РУССКАЯ БАНЯ</div>
  <div className={styles.titledoprow}>на дровах</div>
  <div className={styles.titledoprow}>с бассейном</div>
  </div>
  <div className={styles.flexButtons}>
  <ButtonMore obj={obj}>Смотреть фото</ButtonMore>
  <button className={styles.button}>Забронировать</button>
  </div>
</div>
  );
}
export default Bany;