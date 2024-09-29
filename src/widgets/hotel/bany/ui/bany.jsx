import { bany, bany1, bany2 } from '@/shared/assets';
import ButtonMore from '@/shared/ui/buttonMore/buttonMore';
import styles from './bany.module.css';
import React from 'react';

export const Bany = () => {
    const obj = {
        1: bany,
        2: bany1,
        3: bany2,
    };

    return (
        <div className={styles.wrap} id="bany">
            <div className={styles.block}>
                <div className={styles.title}>РУССКАЯ БАНЯ</div>
                <div className={styles.titledoprow}>на дровах</div>
                <div className={styles.titledoprow}>с бассейном</div>
            </div>
            <div className={styles.flexButtons}>
                <ButtonMore obj={obj}>Смотреть фото</ButtonMore>
                <button className={styles.button}>Забронировать</button>
            </div>
        </div>
    );
};
