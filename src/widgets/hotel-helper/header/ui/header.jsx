import { Link } from 'react-router-dom';
import React from 'react';
import styles from './headerqr.module.css';
export const Header = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                <Link to="/">Maria Hotel</Link>
            </h1>
            <div className={styles.text}>Дорогой гость!</div>
            <div className={styles.text}>
                Мы рады приветствовать Вас в нашем отеле
            </div>
        </div>
    );
};
