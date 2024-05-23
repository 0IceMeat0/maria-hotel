import { useState, useEffect } from 'react';
import Modal from '../modal/modal';
import styles from './buttonMore.module.css';
import dom from '../../assets/img/bag.png';
import dom2 from '../../assets/img/house.png';
import dom3 from '../../assets/img/room.png';
import strelka from '../../assets/icons/strelka.png';
import loader from '../../assets/icons/loaderWhite.gif';

const ButtonMore = ({ className, obj }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [numberFoto, setNumberFoto] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNumberFoto(1);
  }, [obj]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNumberMinus = () => {
    if (numberFoto > 1) {
      setNumberFoto(numberFoto - 1);
      setLoading(true);
    }
  };

  const handleNumberPlus = () => {
    if (numberFoto < Object.keys(obj).length) {
      setNumberFoto(numberFoto + 1);
      setLoading(true);
    }
  };

  const handleImageLoad = () => {
    setLoading(false); 
  };
  console.log(numberFoto);
  if (!obj) {
    obj = {
      1: dom,
      2: dom2,
      3: dom3
    };
  }
  
  return (
    <div>
      <button className={className ? styles.button : styles.buttonMore} onClick={openModal}>
        Смотреть фото
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal} className={styles.modal}>
          <button
            className={`${styles.buttonNext} ${numberFoto === 1 ? styles.disabled : ''}`}
            onClick={handleNumberMinus}
            disabled={numberFoto === 1}
          >
            <img src={strelka} className={styles.strelka} alt='prev' />
          </button>
          <div className={loading ? styles.imageContainer : styles.imageContainerLoader}>
              {loading && <img className={styles.loader} src={loader} alt="Загрузка" />}
            <img
              className={`${styles.img} ${loading ? styles.hidden : ''}`} 
              src={obj[numberFoto]} 
              alt="Фото" 
              onLoad={handleImageLoad}
            />
          </div>
          <button
            className={`${styles.buttonNext} ${numberFoto === Object.keys(obj).length ? styles.disabled : ''}`}
            onClick={handleNumberPlus}
            disabled={numberFoto === Object.keys(obj).length}
          >
            <img src={strelka} className={styles.strelka} alt='next' />
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ButtonMore;
