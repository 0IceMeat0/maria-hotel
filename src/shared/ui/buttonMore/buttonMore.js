import React, { useState } from 'react';
import Modal from '../modal/modal';
import styles from './buttonMore.module.css';
import dom from '../../assets/img/bag.png'
import dom2 from '../../assets/img/house.png'
import dom3 from '../../assets/img/room.png'
import strelka from '../../assets/icons/strelka.png'
const ButtonMore = ({className}) => {
  const [isModalOpen, setModalOpen] = useState(false);
 const [ numberFoto, setNumberFoto] = useState(1);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleNumberMines = () => {
    if (numberFoto > 1) {
      setNumberFoto(numberFoto - 1);
    }
  };
  
  const handleNumberPlus = () => {
    if (numberFoto < 3) {
      setNumberFoto(numberFoto + 1);
    }
  };
  

  const obj = {
    1: dom,
    2: dom2,
    3: dom3
  };

  return (
    <div>
      <button className={className ? styles.button : styles.buttonMore} onClick={openModal}>
        Смотреть фото
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal} className={styles.modal}>
          <button
            className={styles.buttonNext}
            onClick={handleNumberMines}
            disabled={numberFoto === 1}
          >
          <img src={strelka} className={styles.strelka} alt='' />
          </button>
          <img className={styles.img} src={obj[numberFoto]} alt="" />
          <button
            className={styles.buttonNext}
            onClick={handleNumberPlus}
            disabled={numberFoto === 3}
          >
            <img src={strelka} className={styles.strelka} alt='' />
          </button>
        </Modal>
      )}
    </div>
  );
  
};

export default ButtonMore;
