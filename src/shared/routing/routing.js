import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../ui/error-boundary';
import LoadingSkeleton from '../ui/skeleton/loading-skeleton';

const Hotel = React.lazy(() => import('@/pages/hotel/hotel'));
const HotelHelper = React.lazy(
    () => import('@/pages/hotel-helper/hotel-helper'),
);
const DinamicArendaComponent = React.lazy(
    () => import('@/widgets/hotel-helper/rent/ui/dynamic-rent'),
);

const ErrorBoundaryLayout = ({ children, fallback }) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
    );
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundaryLayout fallback={<LoadingSkeleton />}>
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
                    <ErrorBoundaryLayout fallback={<LoadingSkeleton />}>
                        <HotelHelper />
                    </ErrorBoundaryLayout>
                ),
            },
            {
                path: ':id',
                element: (
                    <ErrorBoundaryLayout fallback={<LoadingSkeleton />}>
                        <DinamicArendaComponent />
                    </ErrorBoundaryLayout>
                ),
            },
        ],
    },
]);
