import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Client from './client/client';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './admin/dashboard';
import Testimonial from './components/Testimonial';
import AdminTestemoinal from './admin/AdminTestimonial';
import Signin from './admin/signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Client />,  // Main website page
  },
  {
    path: '/admin/signin',  // `/admin/signin`
    element: <Signin />,  // Admin sign-in page
  },
  {
    path: '/admin',
    element: <AdminLayout />,  
    children: [
      {
        path: 'dashboard',    
        element: <Dashboard />,
      },
      {
        path: 'settings',  // `/admin/settings`
        element: <AdminTestemoinal />,
      },
      // Add more child routes for other sections as needed
    ],
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
