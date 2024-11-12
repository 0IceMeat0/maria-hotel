import EmblaCarousel from './carousel/emblaCarousel';
import styles from './gallery.module.css';
import { Link } from 'react-router-dom';

export const Gallery = () => {
    const OPTIONS = {};
    const SLIDE_COUNT = 10;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.wrap}>
            <Link to="/" onClick={scrollToTop} className={styles.buttonBack}>
                &#8592; Назад
            </Link>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <Link to="/qrcode" className={styles.buttonBron}>
                Забронировать
            </Link>
            <div className={styles.description}>
                <h2>О домике</h2>
                <p>
                    Уютный домик площадью 32 кв.м. Расположен в тихом переулке у
                    леса. В 5 минутах пешком от продуктовых магазинов и кафе, до
                    горнолыжного курорта «Банное» можно добраться на авто за 5
                    минут. LESNOY PEREULOK - идеально подходит для комфортного
                    отдыха 2-3 человек. Комфорт, природа, тишина - всё, что
                    нужно для прекрасного отдыха.
                </p>

                <h3>Чем укомплектован домик:</h3>
                <ul>
                    <li>Домик 32 кв.м.</li>
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
            </div>
        </div>
    );
};
