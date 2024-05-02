import Activities from "../raiting";
import BlockWifi from "../blockwifi";
import HeaderQR from "../headerQR";
import styles from './main.module.css'
import Rent from "../rent";
const Main = () =>{

  return (
    <div className={styles.wrap}>
     <HeaderQR />
     <BlockWifi />
     <Activities />
     <Rent />
    </div>
  )
}
export default Main;