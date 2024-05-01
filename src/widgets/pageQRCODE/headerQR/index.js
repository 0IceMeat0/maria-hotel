import { Link } from 'react-router-dom';
import styles from './headerqr.module.css'
const HeaderQR = () => {

  return(
    <div className={styles.wrap}>
      <h1 className={styles.title}><Link to='/'>Maria Hotel</Link></h1>
      <div className={styles.text}>Дорогой гость!</div>
      <div className={styles.text}>Мы рады приветствовать Вас в нашем отеле</div>
    </div>
  );
}
export default HeaderQR;