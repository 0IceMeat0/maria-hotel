import '../../shared/normalize/normalize.css';

import { useState } from 'react';

import {
    AboutUs,
    Footer,
    Header,
    Places,
    Reglament,
    AboutUsStory,
} from '@/widgets/hotel';
import { insta, menu, telegramwhite, whatsappwhite } from '@/shared/assets';
import Modal from '@/shared/ui/modal/modal';
import styles from './hotel.module.css';
import { useNavigate } from 'react-router-dom';

function Hotel() {
    const [isModalOpenMenu, setModalOpenMenu] = useState(false);
    const navigate = useNavigate();
    const toggleModal = () => {
        setModalOpenMenu(!isModalOpenMenu);
    };
    const linkTransleta = link => {
        setModalOpenMenu(!isModalOpenMenu);
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    const handleClickDom = e => {
        e.preventDefault();
        linkTransleta('reglament');
        setTimeout(() => {
            navigate('/gallery');
            window.scrollTo(0, 0);
        }, 1000);
    };
    const handleClick = e => {
        e.preventDefault();
        linkTransleta('reglament');
        setTimeout(() => {
            navigate('/gallery');
            window.scrollTo(0, 0);
            linkTransleta('yslovia');
        }, 1000);
    };
    return (
        <>
            <div className={styles.wrap}>
                <button
                    className={`${styles.button} ${isModalOpenMenu ? styles.hidden : ''}`}
                    onClick={toggleModal}
                    aria-label="Открыть меню"
                >
                    <img src={menu} className={styles.img} alt="menu" />
                    {isModalOpenMenu && (
                        <Modal onClose={toggleModal} menu={true}>
                            <div className={styles.modalBlock}>
                                <a
                                    className={styles.modalButton}
                                    onClick={handleClickDom}
                                >
                                    Дом
                                </a>
                                <a
                                    className={styles.modalButton}
                                    href="#ysloviya"
                                    onClick={() => linkTransleta('contacts')}
                                >
                                    Адрес и контакты
                                </a>
                                <a
                                    className={styles.modalButton}
                                    onClick={handleClick}
                                >
                                    Условия размещения
                                </a>
                            </div>
                            <div className={styles.blockicons}>
                                <a href="https://t.me/LesnoyPereulok">
                                    <img
                                        src={insta}
                                        className={styles.imgicons}
                                        alt="instagram"
                                    />
                                </a>
                                <a href="https://wa.me/79320121253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D1%88%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA">
                                    <img
                                        src={whatsappwhite}
                                        className={styles.imgicons}
                                        alt="whatsapp"
                                    />
                                </a>
                                <a href="https://t.me/LesnoyPereulok">
                                    <img
                                        src={telegramwhite}
                                        className={styles.imgicons}
                                        alt="telegram"
                                    />
                                </a>
                            </div>
                        </Modal>
                    )}
                </button>
                <Header />
                <AboutUsStory />
                <Places />
                <Reglament />
                <AboutUs />

                <div className={styles.wrapBron}>
                    <a
                        href="https://wa.me/79320121253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D1%88%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA"
                        className={styles.buttonBron}
                    >
                        Забронировать
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hotel;
