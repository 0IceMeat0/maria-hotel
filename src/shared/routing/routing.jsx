import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundaryLayout } from '../error-boundary';
import { MainPageSkeleton } from '../ui/skeleton/ui/hotelpage';

const Hotel = React.lazy(() => import('@/pages/hotel/hotel'));
const HotelHelper = React.lazy(
    () => import('@/pages/hotel-helper/hotel-helper'),
);
const DinamicArendaComponent = React.lazy(
    () => import('@/widgets/hotel-helper/rent/ui/dynamic-rent'),
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundaryLayout fallback={<MainPageSkeleton />}>
                <Hotel />
            </ErrorBoundaryLayout>
        ),
    },
    {
        path: 'qrcode',
        children: [
            {
                index: true,
                element: (
                    <ErrorBoundaryLayout fallback={<MainPageSkeleton />}>
                        <HotelHelper />
                    </ErrorBoundaryLayout>
                ),
            },
            {
                path: ':id',
                element: (
                    <ErrorBoundaryLayout fallback={<MainPageSkeleton />}>
                        <DinamicArendaComponent />
                    </ErrorBoundaryLayout>
                ),
            },
        ],
    },
]);
