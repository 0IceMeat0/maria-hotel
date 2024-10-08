import { useState } from 'react';

import { strelka } from '@/shared/assets';
import { PlacesInfo } from './places-info/places-info';
import styles from './places.module.css';

export const Places = () => {
    const [page, setPage] = useState(1);

    const onClickPage = value => {
        if (value === 'sup' && page < 3) {
            setPage(page + 1);
        } else if (value === 'sub' && page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className={styles.wrap} id="places">
            <div className={styles.header}>
                <div>Размещение</div>
                <div className={styles.blockButtons}>
                    <button
                        className={styles.button}
                        onClick={e => {
                            e.preventDefault();
                            onClickPage('sub');
                        }}
                        aria-label="Предыдущий вариант"
                    >
                        <img src={strelka} className={styles.strelka} alt="" />
                    </button>
                    <button
                        className={styles.button}
                        onClick={e => {
                            e.preventDefault();
                            onClickPage('sup');
                        }}
                        aria-label="Следующий вариант"
                    >
                        <img src={strelka} className={styles.strelka} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.transitionContainer}>
                <PlacesInfo value={page} />
            </div>
        </div>
    );
};
