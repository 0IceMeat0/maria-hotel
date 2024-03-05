import Detalis from '../../shared/ui/details';
import styles from './reglament.module.css';
const Reglament = () => {

  return(
    <div className={styles.wrap} id='ysloviya'>
      <div className={styles.title}>
      <div>Условия</div>
      <div>размещения</div>
      </div>
      <div className={styles.info}>
        <div>Ознакомьтесь с правилами заселения</div>
        <div>и условиями предоставления услуг</div>
        <div>на территории Maria Hotel</div>
      </div>
      <Detalis />
    </div>
  );
}
export default Reglament;