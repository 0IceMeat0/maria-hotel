import { Link } from 'react-router-dom';
import styles from './rent.module.css';

export const Rent = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Чем можно заняться у нас ?</h3>
            <div>
                <Link
                    to="/qrcode/1"
                    className={styles.link}
                    onClick={scrollToTop}
                >
                    <div>
                        <div className={styles.linkTitleFirst}>
                            Аренда Игровых приставок
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <Link
                    to="/qrcode/2"
                    className={styles.link}
                    onClick={scrollToTop}
                >
                    <div className={styles.linkText}>Куда можно сходить</div>
                </Link>
            </div>
            <div>
                <Link
                    to="/qrcode/3"
                    className={styles.link}
                    onClick={scrollToTop}
                >
                    <div>
                        <div className={styles.linkTitleSecond}>
                            Аренда Инвентаря для Туризма
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <Link
                    to="/qrcode/4"
                    className={styles.link}
                    onClick={scrollToTop}
                >
                    <div className={styles.linkText}>Помоги Квоккам</div>
                </Link>
            </div>
        </div>
    );
};
