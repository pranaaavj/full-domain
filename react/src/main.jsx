import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import { CartProvider } from './CartProvider';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: 'menu', element: <Menu /> }],
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      {/* <Navbar />

      <Menu /> */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
