import App from '../../features/app';
import Main from '../../widgets/pageQRCODE/main';
import {
  createBrowserRouter,
} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'qrcode',
    children: [
      {
        index: true,
        element: <Main />
      },
      
    ]
  },
]);