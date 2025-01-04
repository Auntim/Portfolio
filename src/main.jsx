import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Navbar from './components/Navbar.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar></Navbar>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
