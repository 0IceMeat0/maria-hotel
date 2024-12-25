import { telegram, whatsapp1 } from '@/shared/assets';

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
                    <a className={styles.phoneNumber} href="tel:89320121253">
                        +7 932 012 12 53
                    </a>

                    <div className={styles.socialLinks}>
                        <a
                            href="https://t.me/LesnoyPereulok"
                            className={styles.link}
                        >
                            <img
                                src={telegram}
                                className={styles.telegram}
                                alt="Логотип Telegram"
                            />
                            <div className={styles.linkText}>Telegram</div>
                        </a>
                        <a
                            href="https://wa.me/79320121253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B8%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B2%D0%B0%D1%88%20%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA"
                            className={styles.link}
                        >
                            <img
                                src={whatsapp1}
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
                src="https://yandex.ru/map-widget/v1/?ll=58.620217%2C53.607808&mode=poi&poi%5Bpoint%5D=58.620043%2C53.607846&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D24849498153&z=20.17"
                width="100%"
                height="400"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
        </div>
    );
};
