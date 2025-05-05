import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contactme from './pages/Contactme';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Aboutme from './pages/Aboutme';


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contactme",
    element: <Contactme/>,
  },
  {
    path: "/project",
    element: <Projects/>,
  },
  {
    path: "/aboutme",
    element: <Aboutme/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
<RouterProvider router={routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
