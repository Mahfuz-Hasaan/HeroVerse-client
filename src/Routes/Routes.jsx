import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path : '/signup',
          element: <Registration></Registration>
        },
        {
          path : '/mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path : '/addtoy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path : '/about',
          element: <About></About>
        }
      ]
    },
  ]);
export default router  