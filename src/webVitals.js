import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric, message) {
    console.log(message, metric); // Вывод метрики в консоль
}

export function reportWebVitals() {
    getCLS(sendToAnalytics, 'cls');
    getFID(sendToAnalytics, 'FID');
    getLCP(sendToAnalytics, 'LCP');
    getTTFB(sendToAnalytics, 'TFB');
}
