import React, { useState } from 'react';
import Modal from '../modal/modal';
import styles from './buttonMore.module.css';
import dom from '../../assets/img/happyWoman.png'
const ButtonMore = ({ list }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  let count = 0;
  const obj = {};

  for(let index of list){
    obj[++count] = index;
  }
  console.log(obj)
  return (
    <div>
      <button className={styles.button} onClick={openModal}>Смотреть фото</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
         <img className={styles.img} src={dom} alt=''/>
        </Modal>
      )}
    </div>
  );
};

export default ButtonMore;
