import styles from './placesInfo.module.css';
import forest from '../../shared/assets/img/forest.jpg'
import house from '../../shared/assets/img/house.png'
import tea from '../../shared/assets/img/tea.jpg'
import coffe from '../../shared/assets/img/coffe1.jpg'
import bokal from '../../shared/assets/img/bokal.jpg'
import room from '../../shared/assets/img/room.jpg'
import room3 from '../../shared/assets/img/room3.jpg'

const PlacesInfo = ({ value }) => {
  if(value === 1){
  return(
    <div className={styles.wrap}>
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
    <div className={styles.blockImg}>
    <img src={house} className={styles.img1} alt='' />
    <img src={forest} className={styles.img2} alt='' />
    <img src={tea} className={styles.img3} alt='' />
    </div>
    <button className={styles.moreFoto}>Смотреть фото</button>
    </div>
  )
}
  if(value === 2){
  return(
    <div className={styles.wrap}>
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
    <div className={styles.blockImg}>
    <img src={coffe} className={styles.img4} alt='' />
    <img src={bokal} className={styles.img2} alt='' />
    <img src={room} className={styles.img1} alt='' />
    </div>
    <button className={styles.moreFoto}>Смотреть фото</button>
    </div>
    );
}
if(value === 3){
  return(
    <div className={styles.wrap}>
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
  <div className={styles.blockImg}>
  <img src={room3} className={styles.img1} alt='' />
  <img src={forest} className={styles.img2} alt='' />
  <img src={tea} className={styles.img3} alt='' />
  </div>
  <button className={styles.moreFoto}>Смотреть фото</button>
  </div>
    );
}
}
export default PlacesInfo;