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
        }, 0);
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
                    <Link to="/qrcode" className={styles.buttonBron}>
                        Забронировать
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Hotel;
