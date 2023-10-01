import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Shop from "../pages/shop/Shop";
import Login from "../pages/login/Login";
import Regester from "../pages/regester/Regester";
import FilterProducts from "../components/filterProducts/FilterProducts";
import ProductDetails from "../components/productDetails/ProductDetails";

const Router = createBrowserRouter([
    {
        path:  '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://fakestoreapi.com/products/categories'),
                children: [
                    {
                        path: '/:category',
                        element: <FilterProducts />,
                        loader: ({params}) => fetch(`https://fakestoreapi.com/products/category/${params.category}`),
                    }
                ]
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch('https://fakestoreapi.com/products'),
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
            },
            {
                path: '/details/:id',
                element: <ProductDetails />,
                loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`)
            }
        ]
    }
]);

export default Router;