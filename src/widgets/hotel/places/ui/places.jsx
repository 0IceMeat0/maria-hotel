import { srcImages } from '../lib';
import styles from './places.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './dotButton';

export const Places = () => {
    const options = {};
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const images = srcImages.map(src => {
        return (
            <div className={styles.embla__slide}>
                <img src={src} className={styles.img} alt="" />
            </div>
        );
    });
    return (
        <div className={styles.wrap} id="places">
            <div className={styles.title}>КОМФОРТ ПРИРОДА ТИШИНА</div>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>{images}</div>
                <div className={styles.embla__dots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`${styles.embla__dot}  ${index !== selectedIndex ? styles.embla__dotSelected : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
