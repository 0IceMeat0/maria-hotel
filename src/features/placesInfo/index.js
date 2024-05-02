import styles from './placesInfo.module.css';
import house from '../../shared/assets/img/house.png'
import room from '../../shared/assets/img/room.png'
import room3 from '../../shared/assets/img/room3.png'

const PlacesInfo = ({ value }) => {
  if(value === 1){
  return(
    <div className={styles.wrap}>
    <div>
    <div className={styles.title}>
    <div>Домики для</div>
    <div>больших компаний</div>
    </div>
    <div className={styles.body}>
    Соберитесь компанией до 6 человек
    <br></br>
    и проведите вместе каникулы в горах,
    <br></br>
    которые запомнятся на всю жизнь.
    </div>
    <img src={house} className={styles.img} alt='' />
    <button className={styles.moreFoto}>Смотреть фото</button>
    </div>
    <div className={styles.imgCss1}></div>
    </div>
  )
}
  if(value === 2){
  return(
    <div className={styles.wrap}>
    <div>
    <div className={styles.title}>
    <div>Классические</div>
    <div>номера</div>
    </div>
    <div className={styles.body}>
    Уютные номера
    <br></br>
    идеальные для двухместного размещения.
    <br></br>
    Возможно добавить 3 спальное место.
    </div>
    <img src={room} className={styles.img} alt='' />
    <button className={styles.moreFoto}>Смотреть фото</button>
    </div>
    <div className={styles.imgCss2}></div>
    </div>
    );
}
if(value === 3){
  return(
  <div className={styles.wrap}>
  <div>
  <div className={styles.title}>
  <div>Номера</div>
  <div>для 2-4 человек</div>
  </div>
  <div className={styles.body}>
  Просторные номера с балконом.
  <br></br>
  большие окна с видом на горы, 
  <br></br>
  мягкий диван и двухспальная кровать.
  </div>
  <img src={room3} className={styles.img} alt='' />
  <button className={styles.moreFoto}>Смотреть фото</button>
  </div>
  <div className={styles.imgCss3}></div>
  </div>
    );
}
}
export default PlacesInfo;