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
import { Link, useNavigate } from 'react-router-dom';

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
    const handleClick = e => {
        e.preventDefault();
        navigate('/gallery');
        linkTransleta('yslovia');
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
                                    onClick={() => linkTransleta('reglament')}
                                >
                                    Домик
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
                                <img
                                    src={insta}
                                    className={styles.imgicons}
                                    alt="instagram"
                                />
                                <img
                                    src={whatsappwhite}
                                    className={styles.imgicons}
                                    alt="whatsapp"
                                />
                                <img
                                    src={telegramwhite}
                                    className={styles.imgicons}
                                    alt="telegram"
                                />
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
                        href="https://wa.me/79320121253?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C"
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
