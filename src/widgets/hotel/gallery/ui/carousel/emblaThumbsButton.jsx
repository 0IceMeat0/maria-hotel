import styles from './embla.module.css';
import { memo } from 'react';

export const Thumb = memo(({ selected, index, onClick }) => {
    return (
        <div className={styles.embla_thumbs__slide}>
            <button
                onClick={onClick}
                className={`${styles.embla_thumbs__slide__number} ${selected ? styles.selected : ''}`}
            >
                <img src={index} alt="Room" className={styles.thumbImage} />
            </button>
        </div>
    );
});
