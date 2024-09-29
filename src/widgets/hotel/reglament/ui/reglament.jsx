import { uslovia } from '@/shared/assets';
import Detalis from '@/shared/ui/details';
import styles from './reglament.module.css';
import React from 'react';

export const Reglament = () => {
    return (
        <div className={styles.wrap} id="ysloviya">
            <img src={uslovia} className={styles.bag} alt="" />

            <div className={styles.block}>
                <div className={styles.title}>
                    <div>Условия</div>
                    <div>размещения</div>
                </div>
                <div className={styles.info}>
                    <div>Ознакомьтесь с правилами заселения</div>
                    <div>и условиями предоставления услуг</div>
                    <div>на территории Maria Hotel</div>
                </div>
                <Detalis />
            </div>
        </div>
    );
};
