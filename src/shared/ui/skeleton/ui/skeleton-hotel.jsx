import { Skeleton } from '../skeleton';
import styles from './skeleton-hotel.module.css';

export const HotelSkeleton = () => (
    <>
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
            </div>
            <h1 className={styles.title}>Lesnoy Pereulok</h1>
            <Skeleton width={'90%'} height={'20%'} />
            <Skeleton width={'90%'} height={'15%'} />
        </div>
        <div className={styles.bottomMenu}>
            <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
            <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
        </div>
    </>
);
