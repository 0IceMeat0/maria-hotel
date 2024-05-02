import React from 'react';
import { Carousel } from 'antd';
import styles from './rent.module.css'
const contentStyle = {
  height: '180px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Rent = () => (
  <div className={styles.wrap}>
    <h3 className={styles.title}>Чем можно заняться у нас ?</h3>

  <Carousel 
    className={styles.block}
  autoplay autoplaySpeed={4000}
  theme={{
    components: {
      Carousel: {
        dotHeight: '500px'
      },
    },
  }}
>
    <div >
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  </div>
);

export default Rent;