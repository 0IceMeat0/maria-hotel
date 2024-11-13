import { telegram, whatsapp } from '@/shared/assets';

import styles from './about-us.module.css';

export const AboutUs = () => {
    return (
        <div id="contacts" className={styles.wrap}>
            <div className={styles.block}>
                <div className={styles.contactInfo}>
                    <h2 className={styles.titleBlock}>Контакты</h2>
                    <div className={styles.address}>
                        Республика Башкортостан, Абзелиловский район,
                        Ташбулатовский сельсовет, деревня Зелёная Поляна,
                        переулок Лесной, дом 5
                    </div>
                    <a className={styles.phoneNumber} href="tel:89884702074">
                        +7(000) 000 00 00
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
                src="https://yandex.ru/map-widget/v1/?ll=58.619600%2C53.608008&z=19.45"
                width="100%"
                height="400"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
        </div>
    );
};
