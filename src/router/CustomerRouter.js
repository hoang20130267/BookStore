import {Route, Routes} from "react-router-dom";
import {Home} from "../customer/pages/home/Home";
import {BlogDetail} from "../customer/pages/blog-detail/BlogDetail";
import Contact from "../customer/pages/contact/Contact";
import Cart from "../customer/pages/shopping-cart/Cart";
import BlogList from "../customer/pages/blog-list/BlogList";
import ProductList from "../customer/pages/shop-product/ProductList";
import Checkout from "../customer/pages/checkout/Checkout";
import Detail from "../customer/pages/product-detail/Detail";
import SignIn from "../customer/pages/sign-in/SignIn";
import SignUp from "../customer/pages/sign-up/SignUp";
import NotFound from "../customer/pages/others/NotFound";
import ForgotPassword from "../customer/pages/forgot-pasword/ForgotPassword";
import MyAccount from "../customer/pages/my-account/MyAccount";
import MyOrders from "../customer/pages/my-orders/MyOrders";
import OrderDetail from "../customer/pages/order-detail/OrderDetail";
import Wishlist from "../customer/pages/wishlist/Wishlist";
import AddressList from "../customer/pages/user-address/AddressList";
import AddNewAddress from "../customer/pages/user-address/AddNewAddress";
import UpdateAddress from "../customer/pages/user-address/UpdateAddress";
import {Header} from "../customer/components/layout/Header";
import {Footer} from "../customer/components/layout/Footer";

// export const customerRouter = createBrowserRouter([{
//         path: '/',
//         element: <CustomerLayout/>,
//         children: [
//             {
//                 path: "",
//                 element: <Home/>
//             }, {
//                 path: "home",
//                 element: <Home/>,
//             }, {
//                 path: "sign-in",
//                 element: <SignIn/>,
//             }, {
//                 path: "sign-up",
//                 element: <SignUp/>,
//             }, {
//                 path: "product-list",
//                 element: <ProductList/>,
//             }, {
//                 path: "product-detail",
//                 element: <Detail/>,
//             }, {
//                 path: "blog-list",
//                 element: <BlogList/>,
//             }, {
//                 path: "blog-detail",
//                 element: <BlogDetail/>,
//             }, {
//                 path: "contact",
//                 element: <Contact/>,
//             }, {
//                 path: "cart",
//                 element: <Cart/>,
//             }, {
//                 path: "checkout",
//                 element: <Checkout/>,
//             }, {
//                 path: "not-found",
//                 element: <NotFound/>,
//             }, {
//                 path: "forgot-password",
//                 element: <ForgotPassword/>,
//             }, {
//                 path: "user/account",
//                 element: <MyAccount/>,
//             }, {
//                 path: "user/address",
//                 element: <AddressList/>,
//             }, {
//                 path: "user/address/new",
//                 element: <AddNewAddress/>,
//             }, {
//                 path: "user/address/update",
//                 element: <UpdateAddress/>,
//             }, {
//                 path: "user/order",
//                 element: <MyOrders/>,
//             }, {
//                 path: "order-detail",
//                 element: <OrderDetail/>,
//             }, {
//                 path: "user/wishlist",
//                 element: <Wishlist/>,
//             }]
//     }])
// ;

const CustomerRouter = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/product-list" element={<ProductList/>}/>
                <Route path="/product-detail" element={<Detail/>}/>
                <Route path="/blog-list" element={<BlogList/>}/>
                <Route path="/blog-detail" element={<BlogDetail/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/user/account" element={<MyAccount/>}/>
                <Route path="/user/address" element={<AddressList/>}/>
                <Route path="/user/address/new" element={<AddNewAddress/>}/>
                <Route path="/user/address/update" element={<UpdateAddress/>}/>
                <Route path="/user/order" element={<MyOrders/>}/>
                <Route path="/order-detail" element={<OrderDetail/>}/>
                <Route path="/user/wishlist" element={<Wishlist/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
export default CustomerRouter;