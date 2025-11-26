import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import FormAvaliation from './FormAvaliation.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/formAvaliation",
    element: <FormAvaliation/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
