import styles from './skeleton.module.css';

export const Skeleton = ({
    width = '100%',
    height = '100px',
    borderRadius = '8px',
    style = {},
    className = '',
}) => {
    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{ width, height, borderRadius, ...style }}
        />
    );
};
