import styles from './about-us-story.module.css';

export const AboutUsStory = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <div className={styles.title}>
                    LESNOY PEREULOK — БЫЛ СОЗДАН С ДУШОЙ И БОЛЬШОЙ ЛЮБОВЬЮ. ЭТО
                    МЕСТО, КОТОРОЕ ВОССТАНАВЛИВАЕТ СИЛЫ И НАПОЛНЯЕТ ЭНЕРГИЕЙ.
                </div>
                <div className={styles.titledoprow}>
                    Наш домик находится в 1 часе от Магнитогорска, в тихом
                    переулке деревни Зелёная Поляна, где вы сможете хорошо
                    выспаться, насладиться природой и приятно провести время.
                </div>
            </div>
        </div>
    );
};
