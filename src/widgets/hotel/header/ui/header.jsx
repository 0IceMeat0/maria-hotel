import styles from './header.module.css';

export const Header = () => {
    return (
        <div className={styles.block}>
            <div className={styles.linkBlock}>
                <a className={styles.link} href="#places">
                    Номера
                </a>
                <a className={styles.link} href="#places">
                    Территория
                </a>
                <a className={styles.link} href="#ysloviya">
                    Условия размещения
                </a>
                <a className={styles.link} href="#contacts">
                    Адрес и контакты
                </a>
            </div>
            <h1 className={styles.title}>Lesnoy Pereulok</h1>
        </div>
    );
};
