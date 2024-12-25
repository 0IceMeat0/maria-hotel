import EmblaCarousel from './carousel/emblaCarousel';
import styles from './gallery.module.css';
import { Link } from 'react-router-dom';
import {
    thirdSlideGallery,
    secondSlideGallery,
    firstSlideGallery,
    fourSlideGallery,
    fiveSlideGallery,
    sixSlideGallery,
    sevenSlideGallery,
    firstSlideCarousel,
    nineSlideGallery,
    tenSlideGallery,
    elevenSlideGallery,
    twelveSlideGallery,
} from '@/shared/assets';

const Gallery = () => {
    const OPTIONS = {};

    const SLIDES = [
        firstSlideGallery,
        fiveSlideGallery,
        sixSlideGallery,
        sevenSlideGallery,
        nineSlideGallery,
        tenSlideGallery,
        elevenSlideGallery,
        twelveSlideGallery,
        secondSlideGallery,
        thirdSlideGallery,
        fourSlideGallery,
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.wrap}>
            <Link to="/" onClick={scrollToTop} className={styles.buttonBack}>
                &#8592; Назад
            </Link>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            {/* <Link to="/qrcode" className={styles.buttonBron}>
                Забронировать
            </Link> */}
            <a
                href="https://wa.me/79320121253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D1%88%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA"
                className={styles.buttonBron}
            >
                Забронировать
            </a>
            <div className={styles.description}>
                <h2>О доме</h2>
                <p>
                    Уютный дом площадью 32 кв.м. Расположен в тихом переулке у
                    леса. В 5 минутах пешком от продуктовых магазинов и кафе, до
                    горнолыжного курорта «Банное» можно добраться на авто за 5
                    минут. <br />
                    <br />
                    LESNOY PEREULOK - идеально подходит для комфортного отдыха
                    2-3 человек. Комфорт, природа, тишина - всё, что нужно для
                    прекрасного отдыха.
                </p>

                <h3>Чем укомплектован дом:</h3>
                <ul>
                    <li>Дом 32 кв.м.</li>
                    <li>Спальное место - кровать Queen-size</li>
                    <li>Ортопедический матрас, сатиновое постельное бельё</li>
                    <li>Раскладной диван (доп. спальное место)</li>
                    <li>Полностью укомплектованная кухня</li>
                    <li>
                        Санузел, косметические принадлежности (шампунь, гель для
                        душа, мыло, махровые полотенца, фен, тапочки)
                    </li>
                    <li>WiFi, Smart TV</li>
                    <li>
                        Можно проживать с небольшими питомцами (обговаривается
                        отдельно)
                    </li>
                </ul>

                <h3>Бытовая техника</h3>
                <ul>
                    <li>Холодильник</li>
                    <li>Варочная панель</li>
                    <li>Вытяжка</li>
                    <li>Чайник</li>
                </ul>

                <h3>Посуда</h3>
                <ul>
                    <li>Тарелки и приборы на 3 персоны</li>
                    <li>Салатница</li>
                    <li>Бокалы для шампанского</li>
                    <li>Кружки, стаканы</li>
                    <li>Кастрюля, сковорода</li>
                    <li>Открывашка, штопор</li>
                    <li>Ножи, разделочные доски</li>
                    <li>Ваза для цветов</li>
                </ul>

                <h3>Доп. принадлежности</h3>
                <ul>
                    <li>Постельное бельё</li>
                    <li>Полотенца</li>
                    <li>Шампунь, гель для душа</li>
                    <li>Туалетная бумага</li>
                    <li>Фен, тапочки</li>
                    <li>Книги</li>
                    <li>Wi-Fi</li>
                    <li>Решётка для гриля</li>
                </ul>

                <h3>Что взять с собой:</h3>
                <ul>
                    <li>Халаты</li>
                    <li>Зубная щетка, паста</li>
                </ul>

                <h3 id="yslovia">
                    Правила бронирования и условия проживания:{' '}
                </h3>
                <p>
                    Оплата производится в 2 этапа: 50% - при бронировании, 50% -
                    при заезде в дом. Также при заселении вносится залог - 5000
                    руб, который возвращается при выезде из дом.
                </p>
                <p>
                    Отмена бронирования: за 14 дней до заезда - можно полностью
                    отменить бронирование с возвратом предоплаты, за 7 дней до
                    заезда - можно перенести даты бронирования без возврата
                    предоплаты, менее чем за 7 дней до заезда - бронирование не
                    отменяется и не переносится.
                </p>
                <p>Минимальное бронирование: 2 суток.</p>
                <p>
                    Указана стоимость проживания до 3 человек за сутки.
                    Максимальное количество проживающих в доме: 3 человека
                </p>
                <p>
                    Проживание питомца: 2000₽ за весь срок пребывания. Для
                    проживания с питомцем необходимо взять с собой посуду для
                    питания и питья, лежанку.
                </p>
                <p>Заезд 14:00/ выезд 12:00</p>
                <p>
                    Весь мусор необходимо вынести с собой, при наличии мусора в
                    доме из залога будет вычтено 500₽
                </p>
            </div>
        </div>
    );
};
export default Gallery;
