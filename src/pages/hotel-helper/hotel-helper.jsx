import { Wifi } from '@/widgets/hotel-helper/block-wifi';
import { Discount } from '@/widgets/hotel-helper/discount';
import { Chat } from '@/features/hotel-helper/chat';
import { Header } from '@/widgets/hotel-helper/header';
import { Rating } from '@/widgets/hotel-helper/rating';
import { Rent } from '@/widgets/hotel-helper/rent/ui/rent';
import styles from './hotel-helper.module.css';
import React from 'react';
const HotelHelper = () => {
    return (
        <div className={styles.wrap}>
            <Header />
            <Wifi />
            <Rating />
            <Rent />
            <Chat />
            <Discount />
        </div>
    );
};
export default HotelHelper;
