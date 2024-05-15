import styles from './aboutUs.module.css';
import vk from '../../shared/assets/icons/vk.svg';
import insta from '../../shared/assets/icons/instagram.svg';
import whatsapp from '../../shared/assets/icons/whatsapp.svg';
import telegram from '../../shared/assets/icons/telegram.svg';

const AboutUs = () => {

  return(
    <div id="contacts" className={styles.wrap}>
      <div className={styles.block}>
        <div>
      <div className={styles.titlePage}>Жизнь в Maria Hotel</div>

<div className={styles.buttonContainer}>
  <button className={styles.button}><img src={vk} className={styles.vk} alt='vk'/> Подписаться</button>
  <button className={styles.button}><img src={insta} className={styles.insta} alt='insta'/> Подписаться</button>
</div>
</div>
<div className={styles.contactInfo}>
  <div className={styles.titleBlock}>Контакты</div>
  <div className={styles.address}>г. Чикиряу, ул. Лермонтова 228</div>
  <h2 className={styles.phoneNumber}>8 800 890 8900</h2>


<div className={styles.socialLinks}>
  <a href='#1' className={styles.link}><img src={telegram} className={styles.telegram} alt='telegram'/>  <div className={styles.linkText}>Telegram</div></a>
  <a href='#1' className={styles.link}><img src={whatsapp} className={styles.whatsapp} alt='whatsapp'/> <div className={styles.linkText}>WhatsApp</div></a>
</div>
</div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
      <a
        href="https://yandex.ru/maps/62/krasnoyarsk/?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
      >
        Красноярск
      </a>
      <a
        href="https://yandex.ru/maps/62/krasnoyarsk/house/ulitsa_lenina_20/bUsYfg5hSUIEQFtsfXxwdH9hbQ==/?ll=92.891336%2C56.015638&utm_medium=mapframe&utm_source=maps&z=17.98"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
      >
        Улица Ленина, 20 — Яндекс Карты
      </a>
      </div>
      </div>
      <iframe
      className={styles.iframe}
  title="Yandex Map"
  src="https://yandex.ru/map-widget/v1/?ll=92.891336%2C56.015638&mode=whatshere&whatshere%5Bpoint%5D=92.891187%2C56.015250&whatshere%5Bzoom%5D=17&z=17.98"
  width="100%"
  height="400"
  allowFullScreen={true}
  style={{ position: 'relative' }}
  
></iframe>
    </div>
  );
}
export default AboutUs;