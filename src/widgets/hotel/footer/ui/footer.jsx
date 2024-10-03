import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.footer}>
            <div className={styles.title}>Lesnoy Pereulok</div>
            <div className={styles.footerBlock}>
                <ul className={styles.navList}>
                    <li className={styles.item}>
                        <a href="#places">Номера</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#bany">Баня</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#places">Ресторан</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#contacts">Контакты</a>
                    </li>
                </ul>
                <div className={styles.wrap}>
                    <Link
                        className={styles.button}
                        to="/qrcode"
                        onClick={scrollToTop}
                    >
                        Забронировать
                    </Link>
                    <div className={styles.footerinfo}>
                        2023 - 2024 © Корпорация Lesnoy Pereulok. Все права
                        защищены. Конфиденциальная информация, являющаяся
                        собственностью корпорации Lesnoy Pereulok
                    </div>
                </div>
            </div>
        </div>
    );
};
