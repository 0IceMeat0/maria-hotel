import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './dunamicPage.module.css';

const DinamicArendaComponent = () => {
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
      title: "",
      description: "",
      imageUrl: "path/to/sega-image.jpg"
    },
  };

  const item = data[id];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{item.mainTitle}</h2>
      <img className={styles.image} src={item.imageUrl} alt={item.title} />
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default DinamicArendaComponent;
