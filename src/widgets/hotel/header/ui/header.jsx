import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
    const navigate = useNavigate();

    const linkTransleta = link => {
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    const handleClick = e => {
        e.preventDefault();
        navigate('/gallery');
        linkTransleta('yslovia');
    };
    const handleClickDom = e => {
        e.preventDefault();
        linkTransleta('reglament');
        setTimeout(() => {
            navigate('/gallery');
            window.scrollTo(0, 0);
        }, 1000);
    };
    return (
        <div className={styles.block}>
            <div className={styles.linkBlock}>
                <a className={styles.link} onClick={handleClickDom}>
                    Дом
                </a>
                <a className={styles.link} onClick={handleClick}>
                    Условия размещения
                </a>
                <a
                    className={styles.link}
                    onClick={() => linkTransleta('contacts')}
                >
                    Адрес и контакты
                </a>
            </div>
            <h1 className={styles.title}>LESNOY PEREULOK</h1>
        </div>
    );
};
