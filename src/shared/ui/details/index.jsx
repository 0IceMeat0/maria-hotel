import { useState } from 'react';

import Modal from '../modal/modal';
import styles from './detalis.module.css';

const Detalis = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className={styles.button} onClick={openModal}>
                Подробнее
            </button>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <h3 className={styles.title}>Условия размещения</h3>
                    <div>Регистрация заезда с 14:00 до 00:00</div>
                    <div>Регистрация отъезда с 01:00 до 11:00</div>
                    <div>Курить нельзя, с животными запрещено</div>
                </Modal>
            )}
        </div>
    );
};

export default Detalis;
