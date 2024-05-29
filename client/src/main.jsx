// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/LoginRegister/LoginRegister.jsx';
import Profile from './components/Profile/Profile.jsx';
import Error from './components/Error/Error.jsx';
import About from './components/About/About.jsx';
import Feed from './components/Feed/Feed.jsx';
import Random from './components/Random/Random.jsx'
import Recent from './components/Recent/Recent.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/feed',
        element: <Feed />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/random',
        element: <Random />
      }, {
        path: '/Recent',
        element: <Recent />
      }, {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);









