import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './dunamicPage.module.css';
import sony from '../../../../shared/assets/img/sony.png'
import sega from '../../../../shared/assets/img/sega.png'
import close from '../../../../shared/assets/icons/close.png'
const DynamicArendaComponent = () => {
  const { id } = useParams();

  const data = {
    1: {
      mainTitle: "Аренда игровых приставок",
      titleSony: "Аренда игровых приставок: Sony",
      descriptionSony: "Окунитесь в ностальгию с нашей Sony PlayStation 1. Насладитесь классическими играми, такими как Final Fantasy VII, Metal Gear Solid и многие другие.",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: sony, 
      imageSega: sega, 
      moneyTitle: "Цены и условия аренды",
      money: "Стоимость аренды составляет 250 рублей за 24 часа. Все приставки предоставляются с необходимыми кабелями и двумя контроллером.",
      arendaTitle: "Процесс аренды",
      arendaList: [
        'Выберите консоль и периоды аренды',
        'Заполните заявку на сайте или позвоните нам',
       'Получите подтверждение и оплатите аренду',
       'Получите консоль и наслаждайтесь играми',
      ]
    },
    2: {
      mainTitle: "Другие игровые приставки",
      titleSony: "",
      descriptionSony: "",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: "",
      imageSega: "",
      moneyTitle: "",
    },
    3: {
      mainTitle: "Другие игровые приставки",
      titleSony: "",
      descriptionSony: "",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: "",
      imageSega: "",
      moneyTitle: "",
    },
    4: {
      mainTitle: "Другие игровые приставки",
      titleSony: "",
      descriptionSony: "",
      titleSega: "Аренда игровых приставок: Sega",
      descriptionSega: "Испытайте удовольствие от игры на Sega. Вспомните такие хиты, как Sonic the Hedgehog, Street Fighter II и другие увлекательные игры.",
      imageSony: "",
      imageSega: "",
      moneyTitle: "",
    }
  };

  const item = data[id];
  const element = item.arendaList && item.arendaList.map((el, index) => (
    <li key={index} className={styles.itemList}>{el}</li>
  ));

  return (
    <div className={styles.wrap}>
      <Link to="/qrcode" className={styles.backLink}><img className={styles.imgLink} src={close} alt=''/></Link>
      <h2 className={styles.title}>{item.mainTitle}</h2>
      {item.moneyTitle && (
        <>
        <h3 className={styles.moneyTitle}>{item.moneyTitle}</h3>
        <div className={styles.moneyDescription}>{item.money}</div>
        </>
      )}
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
      {item.arendaTitle && (
        <>
          <h3 className={styles.subtitle}>{item.arendaTitle}</h3>
          <ol className={styles.list}>
          {element}
         </ol>
        </>
      )}
      
    </div>
  );
};

export default DynamicArendaComponent;
