import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.block}>
            <div className={styles.linkBlock}>
                <a className={styles.link} href="#reglament">
                    Домик
                </a>
                <a className={styles.link} href="#ysloviya">
                    Условия размещения
                </a>
                <a className={styles.link} href="#contacts">
                    Адрес и контакты
                </a>
            </div>
            <h1 className={styles.title}>LESNOY PEREULOK</h1>
        </div>
    );
};
