import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Shop from "../pages/shop/Shop";
import Login from "../pages/login/Login";
import Regester from "../pages/regester/Regester";

const Router = createBrowserRouter([
    {
        path:  '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/regester',
                element: <Regester />
            }
        ]
    }
]);

export default Router;