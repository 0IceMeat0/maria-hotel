import { useCallback, useEffect, useState } from 'react';

import { strelka, dom, dom2, dom3 } from '../../assets/';

import Modal from '../modal/modal';
import styles from './buttonMore.module.css';

const ButtonMore = ({ className, obj }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentFoto, setCurrentFoto] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setCurrentFoto(1);
    }, [obj]);

    const openModal = useCallback(() => setModalOpen(true), []);
    const closeModal = useCallback(() => setModalOpen(false), []);

    const handleNumberMinus = useCallback(() => {
        if (currentFoto > 1) {
            setCurrentFoto(prevFoto => prevFoto - 1);
            setLoading(true);
        }
    }, [currentFoto]);

    const handleNumberPlus = useCallback(() => {
        if (currentFoto < Object.keys(obj).length) {
            setCurrentFoto(prevFoto => prevFoto + 1);
            setLoading(true);
        }
    }, [currentFoto, obj]);

    const handleImageLoad = useCallback(() => {
        setLoading(false);
    }, []);

    if (!obj) {
        obj = {
            1: dom,
            2: dom2,
            3: dom3,
        };
    }

    return (
        <div>
            <button
                className={className ? styles.button : styles.buttonMore}
                onClick={openModal}
            >
                Смотреть фото
            </button>
            {isModalOpen && (
                <Modal onClose={closeModal} className={styles.modal}>
                    <div className={styles.wrap}>
                        <button
                            className={`${styles.buttonNext} ${currentFoto === 1 ? styles.disabled : ''}`}
                            onClick={handleNumberMinus}
                            disabled={currentFoto === 1}
                        >
                            <img
                                src={strelka}
                                className={styles.strelka}
                                alt="prev"
                            />
                        </button>
                        <div className={styles.imageContainer}>
                            {loading && <div className={styles.loader}></div>}
                            <img
                                className={`${styles.img} ${loading ? styles.hidden : ''}`}
                                src={obj[currentFoto]}
                                alt="Фото"
                                onLoad={handleImageLoad}
                            />
                        </div>
                        <button
                            className={`${styles.buttonNext} ${currentFoto === Object.keys(obj).length ? styles.disabled : ''}`}
                            onClick={handleNumberPlus}
                            disabled={currentFoto === Object.keys(obj).length}
                        >
                            <img
                                src={strelka}
                                className={styles.strelka}
                                alt="next"
                            />
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ButtonMore;
