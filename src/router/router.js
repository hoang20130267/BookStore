import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/pages/home/Home";
import App from "../App";
import {BlogDetail} from "../components/pages/blog-detail/Blog-detail";
import Contact from "../components/pages/contact/Contact";
import Cart from "../components/pages/shopping-cart/Cart";
import BlogList from "../components/pages/blog-list/BlogList";
import ProductList from "../components/pages/shop-product/ProductList";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: "",
            element: <Home/>
        }, {
            path: "home",
            element: <Home/>,
        }, {
            path: "product-list",
            element: <ProductList/>,
        }, {
            path: "bookdetail",
            element: <BlogDetail/>,
        }, {
            path: "blog-list",
            element: <BlogList/>,
        }, {
            path: "blogdetail",
            element: <BlogDetail/>,
        }, {
            path: "contact",
            element: <Contact/>,
        }, {
            path: "cart",
            element: <Cart/>,
        }]
}]);