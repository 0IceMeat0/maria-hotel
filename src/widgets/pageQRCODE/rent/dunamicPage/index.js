import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './dunamicPage.module.css';

const DynamicArendaComponent = () => {
  const { id } = useParams();

  const data = {
    1: {
      mainTitle: "Аренда игровых приставок",
      titleSony: "Аренда игровых приставок: Sony",
      descriptionSony: "Окунитесь в ностальгию с нашей Sony PlayStation 1. Насладитесь классическими играми, такими как Final Fantasy VII, Metal Gear Solid и многие другие.",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: "", 
      imageSega: "", 
      moneyTitle: "Цены и условия аренды",
    },
    2: {
      mainTitle: "Другие игровые приставки",
      titleSony: "",
      descriptionSony: "",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: "",
      imageSega: "path/to/sega-image.jpg",
      moneyTitle: "",
    },
  };

  const item = data[id];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{item.mainTitle}</h2>
      {item.imageSony && (
        <>
          <h3 className={styles.subtitle}>{item.titleSony}</h3>
          <img className={styles.image} src={item.imageSony} alt={item.titleSony} />
          <p className={styles.description}>{item.descriptionSony}</p>
        </>
      )}
      {item.imageSega && (
        <>
          <h3 className={styles.subtitle}>{item.titleSega}</h3>
          <img className={styles.image} src={item.imageSega} alt={item.titleSega} />
          <p className={styles.description}>{item.descriptionSega}</p>
        </>
      )}
      {item.moneyTitle && (
        <h3 className={styles.moneyTitle}>{item.moneyTitle}</h3>
      )}
    </div>
  );
};

export default DynamicArendaComponent;
