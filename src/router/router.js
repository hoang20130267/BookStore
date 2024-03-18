import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/pages/home/Home";
import App from "../App";
import {BlogDetail} from "../components/pages/blog-detail/Blog-detail";
import Contact from "../components/pages/contact/Contact";
import Cart from "../components/pages/shopping-cart/Cart";
import BlogList from "../components/pages/blog-list/BlogList";
import ProductList from "../components/pages/shop-product/ProductList";
import Checkout from "../components/pages/checkout/Checkout";
import Detail from "../components/pages/product-detail/Detail";
import SignIn from "../components/pages/sign-in/SignIn";
import SignUp from "../components/pages/sign-up/SignUp";
import NotFound from "../components/pages/others/NotFound";
import ForgotPassword from "../components/pages/forgot-pasword/ForgotPassword";
import MyAccount from "../components/pages/my-account/MyAccount";

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
            path: "sign-in",
            element: <SignIn/>,
        }, {
            path: "sign-up",
            element: <SignUp/>,
        }, {
            path: "product-list",
            element: <ProductList/>,
        }, {
            path: "product-detail",
            element: <Detail/>,
        }, {
            path: "blog-list",
            element: <BlogList/>,
        }, {
            path: "blog-detail",
            element: <BlogDetail/>,
        }, {
            path: "contact",
            element: <Contact/>,
        }, {
            path: "cart",
            element: <Cart/>,
        }, {
            path: "checkout",
            element: <Checkout/>,
        }, {
            path: "not-found",
            element: <NotFound/>,
        }, {
            path: "forgot-password",
            element: <ForgotPassword/>,
        }, {
            path: "my-account",
            element: <MyAccount/>,
        }]
}]);