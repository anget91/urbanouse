import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';  

const router = createBrowserRouter([
  {
    path: "/urbanouse/",  
    element: <App />,       
  }
]);

// Renderiza tu aplicación dentro del div 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />  
);
