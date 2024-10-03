import styles from './discount.module.css';

export const Discount = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>Забронируй заранее со скидкой 10%</h2>

            <p>Планируете снова к нам приехать или еще размышляете?</p>

            <p>Забронируйте проживание сейчас со скидкой 10%</p>

            <p className={styles.bold}>Позже можно будет поменять дату 😉</p>
            <button className={styles.button}>Зафиксировать скидку</button>
        </div>
    );
};
