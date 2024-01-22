import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import CSS from './Components/CSS/CSS';
import HTML from './Components/HTML/HTML';
import JavaScript from './Components/JavaScript/JavaScript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/css",
    element: <CSS/>,
  },
  {
    path: "/html",
    element: <HTML/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/javascript",
    element: <JavaScript/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
