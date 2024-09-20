import { useEffect, useState } from 'react';

import loader from '../../shared/assets/icons/loaderWhite.gif';
import fotoRoom1 from '../../shared/assets/img/hotelRoom/1.jpg';
import fotoRoom2 from '../../shared/assets/img/hotelRoom/2.jpg';
import fotoRoom3 from '../../shared/assets/img/hotelRoom/3.jpg';
import fotoRoom4 from '../../shared/assets/img/hotelRoom/4.jpg';
import fotoRoom5 from '../../shared/assets/img/hotelRoom/5.jpg';
import fotoRoom6 from '../../shared/assets/img/hotelRoom/6.jpg';
import fotoRoom7 from '../../shared/assets/img/hotelRoom/7.jpg';
import fotoRoom8 from '../../shared/assets/img/hotelRoom/8.jpg';
import fotoRoom9 from '../../shared/assets/img/hotelRoom/9.jpg';
import house from '../../shared/assets/img/house.png';
import room from '../../shared/assets/img/room.png';
import room3 from '../../shared/assets/img/room3.png';
import ButtonMore from '../../shared/ui/buttonMore/buttonMore';
import styles from './placesInfo.module.css';

const placeConfig = {
    1: {
        title: 'Домики для больших компаний',
        body: 'Соберитесь компанией до 6 человек и проведите вместе каникулы в горах, которые запомнятся на всю жизнь.',
        imgSrc: house,
        imgClassName: styles.img,
    },
    2: {
        title: 'Классические номера',
        body: 'Уютные номера идеальные для двухместного размещения. Возможно добавить 3 спальное место.',
        imgSrc: room,
        imgClassName: styles.img,
    },
    3: {
        title: 'Номера для 2-4 человек',
        body: 'Просторные номера с балконом, большие окна с видом на горы, мягкий диван и двухспальная кровать.',
        imgSrc: room3,
        imgClassName: styles.img,
    },
};
const obj = {
    1: {
        1: fotoRoom1,
        2: fotoRoom2,
        3: fotoRoom3,
    },
    2: {
        1: fotoRoom4,
        2: fotoRoom5,
        3: fotoRoom6,
    },
    3: {
        1: fotoRoom7,
        2: fotoRoom8,
        3: fotoRoom9,
    },
};
// eslint-disable-next-line react/prop-types
const PlacesInfo = ({ value }) => {
    const config = placeConfig[value];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [value]);

    if (!config) {
        return null;
    }

    const handleImageLoad = () => {
        setLoading(false);
    };

    const { title, body, imgSrc, imgClassName } = config;

    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <div className={styles.title}>
                    <div>
                        {title.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.body}>
                    {body.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <div className={styles.imageContainer}>
                    {loading && (
                        <img
                            className={styles.loader}
                            src={loader}
                            alt="Загрузка"
                        />
                    )}
                    <img
                        src={imgSrc}
                        className={`${imgClassName} ${loading ? styles.hidden : ''}`}
                        onLoad={handleImageLoad}
                        alt=""
                    />
                </div>
                <ButtonMore className={styles.moreFoto} obj={obj[value]}>
                    Смотреть фото
                </ButtonMore>
            </div>

            <div className={styles[`imgCss${value}`]}>
                {loading && (
                    <img
                        className={styles.loader2}
                        src={loader}
                        alt="Загрузка"
                    />
                )}
            </div>
        </div>
    );
};

export default PlacesInfo;
