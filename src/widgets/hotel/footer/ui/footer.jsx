import styles from './footer.module.css';

export const Footer = () => {
    const linkTransleta = link => {
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };
    return (
        <div className={styles.footer}>
            <div className={styles.title}>LESNOY PEREULOK</div>
            <div className={styles.footerBlock}>
                <ul className={styles.navList}>
                    <li className={styles.item}>
                        <a onClick={() => linkTransleta('reglament')}>Домик</a>
                    </li>
                    <li className={styles.item}>
                        <a onClick={() => linkTransleta('contacts')}>
                            Контакты
                        </a>
                    </li>
                </ul>
                <div className={styles.wrap}>
                    <div className={styles.footerinfo}>
                        2023 - 2024 © Корпорация LESNOY PEREULOK. Все права
                        защищены. Конфиденциальная информация, являющаяся
                        собственностью корпорации LESNOY PEREULOK
                    </div>
                </div>
            </div>
        </div>
    );
};
