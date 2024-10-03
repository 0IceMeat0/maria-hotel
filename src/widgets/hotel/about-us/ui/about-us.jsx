import { insta, telegram, vk, whatsapp } from '@/shared/assets';

import styles from './about-us.module.css';

export const AboutUs = () => {
    return (
        <div id="contacts" className={styles.wrap}>
            <div className={styles.block}>
                <div>
                    <div className={styles.titlePage}>
                        Жизнь в Lesnoy Pereulok
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <img src={vk} className={styles.vk} alt="vk" />
                            Подписаться
                        </button>
                        <button className={styles.button}>
                            <img
                                src={insta}
                                className={styles.insta}
                                alt="insta"
                            />
                            Подписаться
                        </button>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <h2 className={styles.titleBlock}>Контакты</h2>
                    <div className={styles.address}>
                        г. Чикиряу, ул. Лермонтова 228
                    </div>
                    <a className={styles.phoneNumber} href="tel:89884702074">
                        8-988-470-20-74
                    </a>

                    <div className={styles.socialLinks}>
                        <a href="#1" className={styles.link}>
                            <img
                                src={telegram}
                                className={styles.telegram}
                                alt="Логотип Telegram"
                            />
                            <div className={styles.linkText}>Telegram</div>
                        </a>
                        <a href="#1" className={styles.link}>
                            <img
                                src={whatsapp}
                                className={styles.whatsapp}
                                alt="Логотип WhatsApp"
                            />
                            <div className={styles.linkText}>WhatsApp</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.titleIframe}>Расположение</div>
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
};
