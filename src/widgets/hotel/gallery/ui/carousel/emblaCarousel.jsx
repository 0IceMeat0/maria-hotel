import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './emblaThumbsButton';
import styles from './embla.module.css';
import { room } from '@/shared/assets';

const EmblaCarousel = ({ slides, options }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    });

    const onThumbClick = useCallback(
        index => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi],
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        const index = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(index);
        emblaThumbsApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaMainRef}>
                <div className={styles.embla__container}>
                    {slides.map((_, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.embla__slide__number}>
                                <img src={_} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla_thumbs}>
                <div
                    className={styles.embla_thumbs__viewport}
                    ref={emblaThumbsRef}
                >
                    <div className={styles.embla_thumbs__container}>
                        {slides.map((_, index) => (
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={_}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
