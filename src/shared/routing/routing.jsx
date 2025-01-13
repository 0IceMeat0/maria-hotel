import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundaryLayout } from '../error-boundary';
import { HotelSkeleton, GallerySkeleton } from '../ui/skeleton';

// Используем lazy-загрузку для всех страниц
const Hotel = lazy(() => import('@/pages/hotel/hotel'));
const HotelHelper = lazy(() => import('@/pages/hotel-helper/hotel-helper'));
const DynamicRent = lazy(
    () => import('@/widgets/hotel-helper/rent/ui/dynamic-rent'),
);
const Gallery = lazy(
    () => import('../../widgets/hotel/gallery/ui/gallery.jsx'),
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundaryLayout fallback={<HotelSkeleton />}>
                <Hotel />
            </ErrorBoundaryLayout>
        ),
    },
    {
        path: 'gallery',
        element: (
            <ErrorBoundaryLayout fallback={<GallerySkeleton />}>
                <Gallery />
            </ErrorBoundaryLayout>
        ),
    },
]);
// {
//     path: 'qrcode',
//     children: [
//         {
//             index: true,
//             element: (
//                 <ErrorBoundaryLayout fallback={<HotelSkeleton />}>
//                     <HotelHelper />
//                 </ErrorBoundaryLayout>
//             ),
//         },
//         {
//             path: ':id',
//             element: (
//                 <ErrorBoundaryLayout fallback={<HotelSkeleton />}>
//                     <DynamicRent />
//                 </ErrorBoundaryLayout>
//             ),
//         },
//     ],
// },
