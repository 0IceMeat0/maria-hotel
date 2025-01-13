import styles from './footer.module.css';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const linkTransleta = link => {
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };
    const handleClickDom = e => {
        e.preventDefault();
        linkTransleta('reglament');
        setTimeout(() => {
            navigate('/gallery');
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        }, 1000);
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Блок с информацией о компании */}
                <div className={styles.companyInfo}>
                    <h2 className={styles.companyName}>Lesnoy Pereulok</h2>
                    <p className={styles.description}>
                        Снимите уютный дом на озере Банное в Башкирии! 🌲🏡
                        Идеально подходит для семейного отдыха, компании друзей
                        и туристов. Наш коттедж расположен рядом с горнолыжным
                        курортом “Металлург-Магнитогорск”, что делает его
                        отличным вариантом для зимнего и летнего отдыха.
                    </p>
                    <p className={styles.description}>
                        🚵‍♂ Летом: наслаждайтесь природой, катайтесь на
                        велосипеде, гуляйте по горам и купайтесь в чистейшем
                        озере Банное. <br />
                        🎿 Зимой: покоряйте горнолыжные трассы курорта,
                        катайтесь на сноуборде и лыжах.
                    </p>
                </div>

                {/* Блок с ссылками */}
                <div className={styles.links}>
                    <h3 className={styles.sectionTitle}>Полезные ссылки</h3>
                    <ul>
                        <li>
                            <a
                                href="#ysloviya"
                                onClick={() => linkTransleta('contacts')}
                            >
                                О нас
                            </a>
                        </li>
                        <li>
                            <a onClick={handleClickDom}>Галерея</a>
                        </li>
                        <li>
                            <a href="https://wa.me/79320121253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D1%88%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA">
                                Бронирование
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Копирайт и политика */}
            <div className={styles.footerBottom}>
                <p>
                    © 2023 - 2024 Корпорация Lesnoy Pereulok. Все права
                    защищены.
                </p>
                <p>
                    <a href="/privacy-policy">Политика конфиденциальности</a> |
                    <a href="/terms"> Условия использования</a>
                </p>
            </div>
        </footer>
    );
};
