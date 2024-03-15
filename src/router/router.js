import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/pages/Home/Home";
import App from "../App";
import {BlogDetail} from "../components/pages/BlogDetail/Blog-detail";
import Contact from "../components/pages/Contact/Contact";
import Cart from "../components/pages/Shopping-cart/Cart";

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
            path: "listbooks",
            // element: <ListBooks/>,
        }, {
            path: "bookdetail",
            element: <BlogDetail/>,
        }, {
            path: "listblogs",
            // element: <ListBlog/>,
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