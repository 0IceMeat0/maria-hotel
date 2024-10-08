import { useState } from 'react';

import styles from './blockwifi.module.css';

export const Wifi = () => {
    const [value, setValue] = useState(false);
    const [world, setWorld] = useState('Скопировать');
    const password = '";"%!%;!;';

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(password);
            setWorld('Скопировано');
        } catch (error) {
            console.error('Ошибка при копировании текста:', error);
        }
    };

    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Подключение к WIFI</h3>
            <div className={styles.text}>Сеть: $@@$%%#</div>
            <div className={styles.text}>
                Пароль: <span className={styles.bold}>{password}</span>
            </div>
            <button
                className={styles.button}
                onClick={copyToClipboard}
                aria-label="Копировать"
            >
                {world}
            </button>
            <button
                className={styles.buttonSpoiler}
                onClick={() => setValue(!value)}
            >
                Посмотреть инструкцию
            </button>
            {value ? (
                <div className={styles.spoiler}>
                    Найдите сеть с названием $@@$%%# и подключитесь с
                    использованием пароля {password} (скопируйте его выше)
                </div>
            ) : null}
        </div>
    );
};
