import BlockWifi from "../blockwifi";
import HeaderQR from "../headerQR";
import styles from './main.module.css'
const Main = () =>{

  return (
    <div className={styles.wrap}>
     <HeaderQR />
     <BlockWifi />
    </div>
  )
}
export default Main;