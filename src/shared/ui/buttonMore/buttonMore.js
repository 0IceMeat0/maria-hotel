import{ useState } from 'react';
import Modal from '../modal/modal';
import styles from './buttonMore.module.css';
import dom from '../../assets/img/bag.png';
import dom2 from '../../assets/img/house.png';
import dom3 from '../../assets/img/room.png';
import strelka from '../../assets/icons/strelka.png';

const ButtonMore = ({ className, obj }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [numberFoto, setNumberFoto] = useState(1);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNumberMinus = () => {
    if (numberFoto > 1) {
      setNumberFoto(numberFoto - 1);
    }
  };

  const handleNumberPlus = () => {
    if (numberFoto < Object.keys(obj).length) {
      setNumberFoto(numberFoto + 1);
    }
  };

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
          <img className={styles.img} src={obj[numberFoto]} alt="Фото" />
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
