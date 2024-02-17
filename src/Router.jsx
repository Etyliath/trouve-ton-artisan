import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <h1 className='m-5'>Accueil</h1>
      },
      {
        path: 'about',
        element: <h1 className='m-5'>A Propos</h1>
      },
      {
        path: 'list',
        element: <h1 className='m-5'>Liste Artisan</h1>
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
                element: <h1 className='m-5'>mentions légales</h1>
            },
            {
                path:'personnels',
                element: <h1 className='m-5'>mentions légales</h1>
            },
            {
                path:'accesibilté',
                element: <h1 className='m-5'>mentions légales</h1>
            },
            {
                path:'cookies',
                element: <h1 className='m-5'>mentions légales</h1>
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
