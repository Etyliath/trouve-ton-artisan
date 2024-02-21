import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { ArtisanList } from './pages/ArtisanList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'list/category/:filter',
        element: <ArtisanList/>
      },
      {
        path: 'list/search/:result',
        element: <ArtisanList/>
      },
      {
        path: 'artisan',
        element: <h1 className='m-5'>Un Artisan</h1>
      },
      {
        path:'legales/',
        children:[
            {
                path:'mentions',
                element: <h1 className='m-5'>Mentions légales</h1>
            },
            {
                path:'personal',
                element: <h1 className='m-5'>Données personnelles</h1>
            },
            {
                path:'accessibility',
                element: <h1 className='m-5'>Accessibilité</h1>
            },
            {
                path:'cookies',
                element: <h1 className='m-5'>Cookies</h1>
            }
        ]
      }
    ],
  },
]);

export function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
