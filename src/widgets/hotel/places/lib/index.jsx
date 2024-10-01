import {
    fotoRoom1,
    fotoRoom2,
    fotoRoom3,
    fotoRoom4,
    fotoRoom5,
    fotoRoom6,
    fotoRoom7,
    fotoRoom8,
    fotoRoom9,
    houseImg,
    room,
    room3,
} from '@/shared/assets';
import styles from '../ui/places-info/places-info.module.css';
export const placeConfig = {
    1: {
        title: 'Домики для больших компаний',
        body: 'Соберитесь компанией до 6 человек и проведите вместе каникулы в горах, которые запомнятся на всю жизнь.',
        imgSrc: houseImg,
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
export const obj = {
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
