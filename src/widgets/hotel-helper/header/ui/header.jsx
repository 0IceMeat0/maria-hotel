import { Link } from 'react-router-dom';
import styles from './headerqr.module.css';

export const Header = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                <Link to="/">Lesnoy Pereulok</Link>
            </h1>
            <div className={styles.text}>Дорогой гость!</div>
            <div className={styles.text}>
                Мы рады приветствовать Вас в нашем отеле
            </div>
        </div>
    );
};
