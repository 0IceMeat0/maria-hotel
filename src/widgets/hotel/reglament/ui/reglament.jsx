import styles from './reglament.module.css';
import { Link } from 'react-router-dom';

export const Reglament = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.wrap} onClick={scrollToTop} id="ysloviya">
            <div className={styles.block}>
                <Link to="/gallery" className={styles.link}>
                    Домик
                </Link>
            </div>
        </div>
    );
};
