import {Route, Routes} from "react-router-dom";
import {Home} from "../customer/pages/home/Home";
import {BlogDetail} from "../customer/pages/blog-detail/BlogDetail";
import Contact from "../customer/pages/contact/Contact";
import Cart from "../customer/pages/shopping-cart/Cart";
import BlogList from "../customer/pages/blog-list/BlogList";
import ProductList from "../customer/pages/shop-product/ProductList";
import Checkout from "../customer/pages/checkout/Checkout";
import Detail from "../customer/pages/product-detail/ProductDetail";
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

const Router = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/product-list/:categoryId?/:mainCategoryId?/:subCategoryId?" element={<ProductList/>}/>
                <Route path="/product-detail/:id" element={<Detail/>}/>
                <Route path="/blog-list/:id" element={<BlogList/>}/>
                <Route path={`/blog-detail/:id`} element={<BlogDetail/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout/:discount?" element={<Checkout/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/user/account" element={<MyAccount/>}/>
                <Route path="/user/address" element={<AddressList/>}/>
                <Route path="/user/address/new" element={<AddNewAddress/>}/>
                <Route path="/user/address/update/:id" element={<UpdateAddress/>}/>
                <Route path="/user/order" element={<MyOrders/>}/>
                <Route path="/user/order/:id" element={<OrderDetail/>}/>
                <Route path="/user/wishlist" element={<Wishlist/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}
export default Router;