import '../../shared/normalize/normalize.css';

import React, { useState } from 'react';

import { AboutUs } from '@/widgets/hotel/about-us';
import { Bany } from '@/widgets/hotel/bany';
import { DopInfo } from '@/widgets/hotel/dop-info';
import { Footer } from '@/widgets/hotel/footer';
import { Header } from '@/widgets/hotel/header';
import { Places } from '@/widgets/hotel/places';
import { Reglament } from '@/widgets/hotel/reglament';
import insta from '@/shared/assets/icons/instagramewhite.png';
import menu from '@/shared/assets/icons/menu.png';
import telegramwhite from '@/shared/assets/icons/telegramwhite.png';
import vk from '@/shared/assets/icons/vkwhite.png';
import whatsappwhite from '@/shared/assets/icons/whatsappwhite.png';
import Modal from '@/shared/ui/modal/modal';
import styles from './hotel.module.css';

function Hotel() {
    const [isModalOpenMenu, setModalOpenMenu] = useState(false);

    const openModal = () => {
        setModalOpenMenu(true);
    };

    const closeModal = () => {
        setModalOpenMenu(false);
    };
    return (
        <div className={styles.wrap}>
            <button
                className={`${styles.button} ${isModalOpenMenu ? styles.hidden : ''}`}
                onClick={openModal}
            >
                <img src={menu} className={styles.img} alt="" />
                {isModalOpenMenu && (
                    <Modal onClose={closeModal} menu={true}>
                        <div className={styles.modalBlock}>
                            <a
                                className={styles.modalButton}
                                href="#places"
                                onClick={closeModal}
                            >
                                Номера
                            </a>
                            <a
                                className={styles.modalButton}
                                href="#bany"
                                onClick={closeModal}
                            >
                                Баня
                            </a>
                            <a
                                className={styles.modalButton}
                                href="#places"
                                onClick={closeModal}
                            >
                                Территория
                            </a>
                            <a
                                className={styles.modalButton}
                                href="#ysloviya"
                                onClick={closeModal}
                            >
                                Условия размещения
                            </a>
                            <a
                                className={styles.modalButton}
                                href="#contacts"
                                onClick={closeModal}
                            >
                                Адрес и контакты
                            </a>
                        </div>
                        <div className={styles.blockicons}>
                            <img src={vk} className={styles.imgicons} alt="" />
                            <img
                                src={insta}
                                className={styles.imgicons}
                                alt=""
                            />
                            <img
                                src={whatsappwhite}
                                className={styles.imgicons}
                                alt=""
                            />
                            <img
                                src={telegramwhite}
                                className={styles.imgicons}
                                alt=""
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
