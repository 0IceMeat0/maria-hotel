import Activities from "../raiting";
import BlockWifi from "../blockwifi";
import HeaderQR from "../headerQR";
import styles from './main.module.css'
import Rent from "../rent";
import FooterQR from "../footerQR";
import SaleBlock from "../saleBlock";
const Main = () =>{

  return (
    <div className={styles.wrap}>
     <HeaderQR />
     <BlockWifi />
     <Activities />
     <Rent />
     <FooterQR />
     <SaleBlock />
    </div>
  )
}
export default Main;