import { useCallback, useEffect, useState } from 'react';
import { strelkaBlack, dom, dom2, dom3 } from '../../assets/';
import Modal from '../modal/modal';
import styles from './buttonMore.module.css';

const ButtonMore = ({ className, obj = { 1: dom, 2: dom2, 3: dom3 } }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentFoto, setCurrentFoto] = useState(1);

    useEffect(() => {
        setCurrentFoto(1);
    }, [obj]);

    const openModal = useCallback(() => setModalOpen(true), []);
    const closeModal = useCallback(() => setModalOpen(false), []);

    const handleNumberMinus = useCallback(() => {
        setCurrentFoto(prevFoto => Math.max(1, prevFoto - 1));
    }, []);

    const handleNumberPlus = useCallback(() => {
        setCurrentFoto(prevFoto =>
            Math.min(Object.keys(obj).length, prevFoto + 1),
        );
    }, [obj]);

    const handleImageLoad = useCallback(() => {}, []);

    return (
        <div>
            <button
                className={className || styles.buttonMore}
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
                                src={strelkaBlack}
                                className={styles.strelka}
                                alt="prev"
                            />
                        </button>
                        <div className={styles.imageContainer}>
                            <img
                                className={`${styles.img}`}
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
                                src={strelkaBlack}
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
