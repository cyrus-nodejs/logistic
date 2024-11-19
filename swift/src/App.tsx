
import './App.css'
import Home from './Home'
import "boxicons"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import ErrorPage from './ErrorPage';
import Vehicles from './routes/Vehicles';
import Services from './routes/Services';
import Aboutus from './routes/Aboutus';
import News from './routes/News';
import Shop from './routes/Shop';
import Contact from './routes/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  
   const router = createBrowserRouter([
    {
    path: "/",
    element: <Home   />,
    errorElement: <ErrorPage />
  },
  {
    path: "/vehicle",
    element: <Vehicles  />,
    errorElement: <ErrorPage />
  },
  {
    path: "/service",
    element: <Services  />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about-us",
    element: <Aboutus  />,
    errorElement: <ErrorPage />
  },
  {
    path: "/news",
    element: <News  />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <Shop  />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact  />,
    errorElement: <ErrorPage />
  },
])

  return (
    <section className="vh-100">
      
      <RouterProvider router={router} />
      
    </section>
  )
}

export default App
