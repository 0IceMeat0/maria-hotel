import { useState } from 'react';
import styles from './blockwifi.module.css'

const BlockWifi = () => {
 const [value, setValue] = useState(false); 

  return(
    <div className={styles.wrap}>
        <h3 className={styles.title}>Подключение к WIFI</h3>
         <div className={styles.text}>Сеть: $@@$%%#</div>
         <div className={styles.text}>Пароль: <span className={styles.bold}>";"%!%;!;</span></div>
        <button className={styles.button}>Скопировать</button>
        <button className={styles.buttonSpoiler} onClick={() => setValue(!value)}>Посмотреть инструкцию</button>
        {value ? 
        <div className={styles.spoiler}>
        Найдите сеть с названием $@@$%%# и подключитесь с использованием пароля ";"%!%;!; (скопируйте его выше)
        </div> 
        :
       null}
    </div>
  );
}
export default BlockWifi;