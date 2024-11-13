import styles from './reglament.module.css';
import { Link } from 'react-router-dom';

export const Reglament = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Link
            to="/gallery"
            className={styles.wrap}
            onClick={scrollToTop}
            id="reglament"
        >
            <div className={styles.block}>Домик</div>
        </Link>
    );
};
