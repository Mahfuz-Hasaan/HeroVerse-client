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
import SingleToyDetails from "../SubPages/SingleToyDetails/SingleToyDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import ErrorPage from "../Pages/ErrorPAge/ErrorPage";

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
        },
        {
          path : '/alltoys',
          element : <AllToys></AllToys>,
          loader : ({params}) => fetch('https://toy-marketplace-server-side-mahfuzhasan584-gmailcom.vercel.app/addedToys'),
        },
        {
          path : '/alltoys/:id',
          element : <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
          loader : ({params}) => fetch(`https://toy-marketplace-server-side-mahfuzhasan584-gmailcom.vercel.app/addedToys/${params.id}`),
        },
        {
          path : '/updatetoys/:id',
          element : <UpdateToys></UpdateToys>,
          loader : ({params})=> fetch(`https://toy-marketplace-server-side-mahfuzhasan584-gmailcom.vercel.app/addedToys/${params.id}`)
        }
      ]
    },
    {
      path : "*",
      element : <ErrorPage></ErrorPage> 
    }
  ]);
export default router  