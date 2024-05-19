import App from '../../features/app';
import Main from '../../widgets/pageQRCODE/main';
import {
  createBrowserRouter,
} from 'react-router-dom';
import DinamicArendaComponent from '../../widgets/pageQRCODE/rent/dunamicPage';


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
      {
        path: ':id',
        element: <DinamicArendaComponent />
      }
    ]
  },
]);



