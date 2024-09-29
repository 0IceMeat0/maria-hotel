import { bear, mount, tree, wood } from '@/shared/assets';

import styles from './header.module.css';
import React from 'react';

export const Header = () => {
    return (
        <div className={styles.block}>
            <div className={styles.linkBlock}>
                <a className={styles.link} href="#places">
                    Номера
                </a>
                <a className={styles.link} href="#bany">
                    Баня
                </a>
                <a className={styles.link} href="#places">
                    Территория
                </a>
                <a className={styles.link} href="#ysloviya">
                    Условия размещения
                </a>
                <a className={styles.link} href="#contacts">
                    Адрес и контакты
                </a>
            </div>
            <h1 className={styles.title}>Maria Hotel</h1>
            <div className={styles.wrap}>
                <button className={styles.button}>Забронировать</button>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src={bear} className={styles.icon} alt="icon" />
                        <div className={styles.iconBlock}>
                            {' '}
                            Удобное расположение
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img src={mount} className={styles.icon} alt="icon" />
                        <div className={styles.iconBlock}>
                            До центра города 10мин
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img src={tree} className={styles.icon} alt="icon" />
                        <div className={styles.iconBlock}>
                            Эко-номер из <br></br>сибирского леса
                        </div>
                    </li>
                    <li className={styles.item}>
                        <img src={wood} className={styles.icon} alt="icon" />
                        <div className={styles.iconBlock}>
                            сосны на территории
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
