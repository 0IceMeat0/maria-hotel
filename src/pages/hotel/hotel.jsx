import '../../shared/normalize/normalize.css';

import { useState } from 'react';

import {
    AboutUs,
    Bany,
    DopInfo,
    Footer,
    Header,
    Places,
    Reglament,
} from '@/widgets/hotel';
import { insta, menu, telegramwhite, vk, whatsappwhite } from '@/shared/assets';
import Modal from '@/shared/ui/modal/modal';
import styles from './hotel.module.css';

function Hotel() {
    const [isModalOpenMenu, setModalOpenMenu] = useState(false);

    const toggleModal = () => {
        setModalOpenMenu(!isModalOpenMenu);
    };
    return (
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
                                href="#places"
                                onClick={toggleModal}
                            >
                                Номера
                            </a>
                            <a
                                className={styles.modalButton}
                                href="#bany"
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
                            <img src={vk} className={styles.imgicons} alt="" />
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
            <Places />
            <Bany />
            <DopInfo />
            <Reglament />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Hotel;
