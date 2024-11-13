import { Skeleton } from '../skeleton';
import styles from './skeleton-hotel.module.css';

export const HotelSkeleton = () => (
    <>
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
            </div>
            <h1 className={styles.title}>LESNOY PEREULOK</h1>
        </div>
    </>
);
