import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Hotel from '@/pages/hotel/hotel';
import HotelHelper from '@/pages/hotel-helper/hotel-helper';
import DinamicArendaComponent from '@/widgets/hotel-helper/rent/ui/dynamic-rent';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Hotel />,
    },
    {
        path: 'qrcode',
        children: [
            {
                index: true,
                element: <HotelHelper />,
            },
            {
                path: ':id',
                element: <DinamicArendaComponent />,
            },
        ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
]);
