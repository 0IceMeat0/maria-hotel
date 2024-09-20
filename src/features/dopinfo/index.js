import car from '../../shared/assets/icons/car.png';
import eat from '../../shared/assets/icons/eat.png';
import fire from '../../shared/assets/icons/fire.png';
import house from '../../shared/assets/icons/house.png';
import inet from '../../shared/assets/icons/inet.png';
import styles from './dopinfo.module.css';

const DopInfo = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.title}> В стоимость включено</div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={fire} alt="" />
                    <div>мангальная зона</div>
                </li>
                <li className={styles.item}>
                    <img src={house} alt="" />
                    <div>уютные беседки</div>
                </li>
                <li className={styles.item}>
                    <img src={car} alt="" />
                    <div>закрытая парковка</div>
                </li>
                <li className={styles.item}>
                    <img src={eat} alt="" />
                    <div>кухня и столовая зона</div>
                </li>
                <li className={styles.item}>
                    <img src={inet} alt="" />
                    <div>бесплатный интернет</div>
                </li>
            </ul>
        </div>
    );
};
export default DopInfo;
