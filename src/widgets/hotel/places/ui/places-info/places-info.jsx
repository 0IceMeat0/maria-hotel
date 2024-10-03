import { useEffect, useState } from 'react';
import ButtonMore from '@/shared/ui/buttonMore/buttonMore';
import styles from './places-info.module.css';
import { Skeleton } from '@/shared/ui/skeleton/skeleton';
import { placeConfig, obj } from '../../lib';

export const PlacesInfo = ({ value }) => {
    const [loading, setLoading] = useState(true);
    const config = placeConfig[value];

    if (!config) return null;

    useEffect(() => {
        setLoading(false);
    }, [value]);

    const { title, body, imgSrc, imgClassName } = config;

    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <div className={styles.title}>
                    {title.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <div className={styles.body}>
                    {body.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <div className={styles.imageContainerPhone}>
                    {!loading && <Skeleton width="90%" height={`300px`} />}
                    <img
                        src={imgSrc}
                        className={
                            loading
                                ? imgClassName
                                : styles.imageContainerDesktop
                        }
                        onLoad={() => setLoading(true)}
                        alt=""
                    />
                </div>
                <ButtonMore className={styles.moreFoto} obj={obj[value]}>
                    Смотреть фото
                </ButtonMore>
            </div>
            <div className={styles.imageContainerDesktop}>
                {!loading && <Skeleton height="250px" width="250px" />}
                <img
                    src={imgSrc}
                    className={
                        loading ? imgClassName : styles.imageContainerPhone
                    }
                    onLoad={() => setLoading(true)}
                    alt=""
                />
            </div>
        </div>
    );
};
