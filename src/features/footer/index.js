import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
      <div className={styles.footer}>
        <div className={styles.title}>Maria Hotel</div>
        <div className={styles.footerBlock}>
        <ul className={styles.navList}>
          <li className={styles.item}><a href="#places">Номера</a></li>
          <li className={styles.item}><a href="#bany">Баня</a></li>
          <li className={styles.item}><a href="#places">Ресторан</a></li>
          <li className={styles.item}><a href="#contacts">Контакты</a></li>
        </ul>
        <div className={styles.wrap}>
        <Link className={styles.button} to='/qrcode'>Забронировать</Link>
        <div className={styles.footerinfo}>2023 - 2024 © Корпорация Maria Hotel. Все права защищены. Конфиденциальная информация, являющаяся собственностью корпорации Maria Hotel</div>
        </div>
        </div>
      </div>
  );
};

export default Footer;