import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './routes/Home';
import Settings from './routes/Settings';
import Post from './routes/Post';
import Delete from './routes/Delete';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home />       
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/post",
        element: <Post />
      },
      {
        path: "/delete",
        element: <Delete />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

