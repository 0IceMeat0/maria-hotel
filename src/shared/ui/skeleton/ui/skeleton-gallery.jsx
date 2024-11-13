import { Skeleton } from '../skeleton';
import styles from './skeleton-gallery.module.css';

export const GallerySkeleton = () => (
    <>
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <Skeleton
                    width={'120px'}
                    height={'50px'}
                    borderRadius={'25px'}
                />
            </div>
            <div className={styles.imgWrap}>
                <Skeleton width={'100%'} height={'50%'} borderRadius={'25px'} />
                <div className={styles.smallImg}>
                    <Skeleton
                        width={'100%'}
                        height={'50%'}
                        borderRadius={'25px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'50%'}
                        borderRadius={'25px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={'50%'}
                        borderRadius={'25px'}
                    />
                </div>
            </div>

            <h1 className={styles.title}>LESNOY PEREULOK</h1>
        </div>
    </>
);
