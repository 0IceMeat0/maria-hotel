import { Carousel } from 'antd';
import styles from './rent.module.css';
import { Link } from 'react-router-dom';
import turism from '../../../shared/assets/img/turism.png'
import arenda2 from '../../../shared/assets/img/arenda2.png'
import zoo from '../../../shared/assets/img/zoo.jpeg'
import CartoonForest from '../../../shared/assets/img/CartoonForest.png'
const Rent = () => (
  <div className={styles.wrap}>
    <h3 className={styles.title}>Чем можно заняться у нас ?</h3>
    <Carousel 
      className={styles.block}
      // autoplay
      autoplaySpeed={4000}
      theme={{
        components: {
          Carousel: {
            dotHeight: '500px'
            
          },
        },
      }}
    >
      <div>
        <Link to='/qrcode/1' className={styles.link}>
        <div>
           <div className={styles.linkTitleFirst}>Аренда Игровых приставок</div>
          </div>
          <img className={styles.linkFoto} src={arenda2} alt='' />
        </Link>
      </div>
      <div>
        <Link to='/qrcode/2'  className={styles.link}>
          <img className={styles.linkFotoForest} src={CartoonForest} alt='' />
          <div className={styles.linkText}>Куда можно сходить</div>
        </Link>
      </div>
      <div>
        <Link to='/qrcode/3' className={styles.link}>
        <img className={styles.linkFoto} src={turism} alt='' />
           <div>
           <div className={styles.linkTitleSecond}>Аренда Инвентаря для Туризма</div>
          </div>
        </Link>
      </div>
      <div>
      <Link to='/qrcode/4' className={styles.link}>
          <img className={styles.linkFotoZOO} src={zoo} alt='' />
          <div className={styles.linkText}>Помоги Квоккам</div>
        </Link>
      </div>
    </Carousel>
  </div>
);

export default Rent;

