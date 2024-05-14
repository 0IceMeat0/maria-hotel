import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import close from '../../assets/icons/close.png';
import closewhite from '../../../shared/assets/icons/closewhite.png';

const Modal = ({ onClose, children, menu, className}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 300);
  };

  return ReactDOM.createPortal(
    <div className={`${styles.overlay} ${isActive && styles.active}`} onClick={onClose}>
      {menu ? (
        <div className={`${styles.menu} ${isActive && styles.active}`} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={handleClose}><img className={styles.img} src={closewhite} alt='Закрыть'/></button>
          {children}
        </div>
      ) : (
        <div className={`${className ? styles.modalFoto : styles.modal} ${isActive && styles.active}`} onClick={(e) => e.stopPropagation()}>
         
          {children}
           {className ?
           <button className={styles.closeButtonFoto} onClick={handleClose}><img className={styles.img} src={closewhite} alt='Закрыть'/></button>
           :
            <button className={styles.closeButton} onClick={handleClose}><img className={styles.img} src={close} alt='Закрыть'/></button>
          }
        </div>
      )}
    </div>,
    document.body
  );
};

export default Modal;
