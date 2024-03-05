import styles from './header.module.css'

import tree from '../../shared/assets/icons/tree.svg'
import bear from '../../shared/assets/icons/bear.svg'
import mount from '../../shared/assets/icons/mount.svg'
import wood from '../../shared/assets/icons/wood.svg'
const Header = () => {

  return(
    <div className={styles.block}>
      <h1 className={styles.title}>Maria Hotel</h1>
        <div className={styles.wrap}>
        <button className={styles.button}>Забронировать</button>

        <ul className={styles.list}>
          <li className={styles.item}>
          <img src={bear} className={styles.icon} alt='icon'/><div className={styles.iconBlock}> Удобное расположение</div>
          </li>
          <li className={styles.item}>
          <img src={mount} className={styles.icon} alt='icon'/><div className={styles.iconBlock}>До центра города 10мин</div>
            </li>
            <li className={styles.item}>
            <img src={tree} className={styles.icon}  alt='icon'/><div className={styles.iconBlock}>Эко-номер из <br></br>сибирского леса</div>
            </li>
            <li className={styles.item}>
            <img src={wood} className={styles.icon} alt='icon'/><div className={styles.iconBlock}>сосны на территории</div>
            </li>
        </ul>
        </div>
    </div>
  );
}
export default Header;