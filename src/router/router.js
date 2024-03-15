import {createBrowserRouter} from "react-router-dom";
import {Home} from "../components/pages/Home/Home";
import App from "../App";
import BlogList from "../components/pages/BlogList/BlogList";

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
        },
        {
            path: "blog-list",
            element: <BlogList/>,
        }]
}]);