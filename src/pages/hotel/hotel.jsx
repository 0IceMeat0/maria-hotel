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
import { Link } from 'react-router-dom';

function Hotel() {
    const [isModalOpenMenu, setModalOpenMenu] = useState(false);
    const toggleModal = () => {
        setModalOpenMenu(!isModalOpenMenu);
    };

    return (
        <>
            <div className={styles.wrap}>
                <div
                    className={`${styles.header} ${isModalOpenMenu ? styles.hidden : ''}`}
                >
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
                                        href="#places"
                                        onClick={toggleModal}
                                    >
                                        Номера
                                    </a>
                                    <a
                                        className={styles.modalButton}
                                        onClick={toggleModal}
                                    >
                                        Баня
                                    </a>
                                    <a
                                        className={styles.modalButton}
                                        href="#places"
                                        onClick={toggleModal}
                                    >
                                        Территория
                                    </a>
                                    <a
                                        className={styles.modalButton}
                                        href="#ysloviya"
                                        onClick={toggleModal}
                                    >
                                        Условия размещения
                                    </a>
                                    <a
                                        className={styles.modalButton}
                                        href="#contacts"
                                        onClick={toggleModal}
                                    >
                                        Адрес и контакты
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
                </div>
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
