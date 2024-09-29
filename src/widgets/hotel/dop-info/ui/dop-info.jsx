import { car, eat, fire, house, inet } from '@/shared/assets';

import styles from './dop-info.module.css';
import React from 'react';

export const DopInfo = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}> В стоимость включено</div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={fire} alt="" />
                    <div>мангальная зона</div>
                </li>
                <li className={styles.item}>
                    <img src={house} alt="" />
                    <div>уютные беседки</div>
                </li>
                <li className={styles.item}>
                    <img src={car} alt="" />
                    <div>закрытая парковка</div>
                </li>
                <li className={styles.item}>
                    <img src={eat} alt="" />
                    <div>кухня и столовая зона</div>
                </li>
                <li className={styles.item}>
                    <img src={inet} alt="" />
                    <div>бесплатный интернет</div>
                </li>
            </ul>
        </div>
    );
};
