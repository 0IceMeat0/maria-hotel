import { Suspense, Component } from 'react';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('Error caught in ErrorBoundary:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children;
    }
}

export const ErrorBoundaryLayout = ({ children, fallback }) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
    );
};
