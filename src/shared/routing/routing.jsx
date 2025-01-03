import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundaryLayout } from '../error-boundary';
import { HotelSkeleton, GallerySkeleton } from '../ui/skeleton';

const Hotel = React.lazy(() => import('@/pages/hotel/hotel'));
const HotelHelper = React.lazy(
    () => import('@/pages/hotel-helper/hotel-helper'),
);
const DinamicArendaComponent = React.lazy(
    () => import('@/widgets/hotel-helper/rent/ui/dynamic-rent'),
);
const Gallery = React.lazy(
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
    //                     <DinamicArendaComponent />
    //                 </ErrorBoundaryLayout>
    //             ),
    //         },
    //     ],
    // },
    {
        path: 'gallery',
        children: [
            {
                index: true,
                element: (
                    <ErrorBoundaryLayout fallback={<GallerySkeleton />}>
                        <Gallery />
                    </ErrorBoundaryLayout>
                ),
            },
        ],
    },
]);
