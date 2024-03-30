import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header id="site-header" className="site-header site-header__v12 pb-1">
            <div className="masthead">
                <div className="bg-punch-light">
                    <div className="container py-3 py-md-4">
                        <div className="d-flex align-items-center position-relative flex-wrap">
                            <div className="d-none d-xl-flex align-items-center mt-3 mt-md-0 mr-md-auto">
                                <a href="mailto:info@bookworm.com" className="mr-4 mb-4 mb-md-0">
                                    <div className="d-flex align-items-center text-dark font-size-2 text-lh-sm">
                                        <i className="fa-regular fa-circle-question font-size-5 mt-2 mr-1"></i>
                                        <div className="ml-2">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            goldleaf@gmail.com </span>
                                            <div className="h6 mb-0">
                                                Gửi mail ngay!
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="tel:+1246-345-0695">
                                    <div className="d-flex align-items-center text-dark font-size-2 text-lh-sm">
                                        <i className="fa-solid fa-phone font-size-5 mt-2 mr-1"></i>
                                        <div className="ml-2">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            +84 765 999 111 </span>
                                            <div className="h6 mb-0">
                                                Gọi không tốn phí
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="site-branding pr-md-7 mx-md-0">
                                <h1 className="beta site-title site-title text-uppercase font-weight-bold font-size-5 m-0 ">
                                    <Link to="/">GoldLeaf</Link></h1>
                            </div>
                            <div className="d-flex align-items-center ml-auto header-icons-links">
                                <Link id="sidebarNavToggler-my_account" to="sign-in">
                                    <div
                                        className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                        <i className="fa-solid fa-user font-size-5 text-dark"></i>
                                        <div className="ml-2 d-none d-lg-block text-dark">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            Đăng nhập </span>
                                            <div>Tài khoản</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link id="sidebarNavToggler-my_cart" to="/cart"
                                      className="d-block nav-link text-dark ml-4">
                                    <div
                                        className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                                    <span
                                        className="position-absolute width-16 height-16 rounded-circle d-flex align-items-center justify-content-center font-size-n9 left-0 top-0 ml-n2 mt-n1 text-white bg-dark">
                                        <span className="cart-contents-count">
                                            0
                                        </span> </span>
                                        <Link to={"/cart"}>
                                            <i className="fa-solid fa-cart-shopping font-size-5 text-dark"></i>
                                        </Link>
                                        <div className="ml-2 d-none d-lg-block text-dark">
                                        <span className="text-secondary-gray-1090 font-size-1">
                                            Giỏ hàng </span>
                                            <div><span className="cart-contents-total">
                                                <span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">&#036;</span>0.00</span>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-bottom py-1 d-none d-xl-block">
                    <div className="container">
                        <div className="d-md-flex align-items-center position-relative">
                            <div className="site-navigation mx-auto">
                                <nav className="header__menu">
                                    <ul>
                                        <li><Link to={"/"}>Trang Chủ</Link></li>
                                        <li><Link to={"/product-list"}>Danh mục sản phẩm</Link>
                                            <ul className="header__menu__dropdown">
                                                <li><a href="">Hài kịch</a>
                                                    <ul className="header__menu__dropdown__level2">
                                                        <li><Link to={""}>Hài Việt</Link></li>
                                                        <li><Link to={""}>Hài Trung</Link></li>
                                                        <li><Link to={""}>Hài Hàn</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={""}>Hành động</Link></li>
                                                <li><Link to={""}>Tình cảm</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={"/blog-list"}>Tin Tức</Link></li>
                                        <li><Link to={"/contact"}>Liên Hệ</Link></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
