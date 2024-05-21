import styles from './footer.module.css';
import whatsapp from '../../../shared/assets/icons/whatsapp.svg'
import telephone from '../../../shared/assets/icons/telephone.svg'
const FooterQR = () => {

  return(
    <div className={styles.wrap}>
    <a className={styles.link} href='tel: 89884702074'><img className={styles.img} src={telephone} alt=''/>Позвони нам</a>
    <a className={styles.link} href='#1'><img className={styles.img} src={whatsapp} alt=''/>Напиши нам</a>
    </div>
  );
}
export default FooterQR;