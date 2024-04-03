import React from "react";
import "./assets/css/index.scss"
import "./assets/fonts/material.css"
import "./assets/fonts/feather.css"
import "./assets/fonts/fontawesome.css"

const AdminDashboard = () => {
    return (
        <div>
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill"></div>
                </div>
            </div>
            <div className="pc-mob-header pc-header">
                <div className="pcm-logo">
                    <img src="./assets/images/logo.png" alt="" className="logo logo-lg"/>
                </div>
                <div className="pcm-toolbar">
                    <a href="#!" className="pc-head-link" id="mobile-collapse">
                        <div className="hamburger hamburger--arrowturn">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" className="pc-head-link" id="headerdrp-collapse">
                        <i data-feather="align-right"></i>
                    </a>
                    <a href="#!" className="pc-head-link" id="header-collapse">
                        <i data-feather="more-vertical"></i>
                    </a>
                </div>
            </div>
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <a href="index.html" className="b-brand">
                            <img src={require("./assets/images/logo.png")} alt="" className="logo logo-lg"/>
                            <img src={require("./assets/images/logo-sm.svg")} alt="" className="logo logo-sm"/>
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            <li className="pc-item pc-caption">
                                <label>Quản lý</label>
                            </li>
                            <li className="pc-item">
                                <a href="index.html" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone">home</i></span><span
                                    className="pc-mtext">Quản lý chung</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Quản lý sản phẩm</label>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"><i
                                    data-feather="github">business_center</i></span><span
                                    className="pc-mtext">Thú cưng</span><span className="pc-arrow"><i
                                    data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="list-products.html">Danh sách
                                        thú
                                        cưng</a></li>
                                    <li className="pc-item"><a className="pc-link" href="add-product.html">Thêm thú
                                        cưng</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone">business_center</i></span><span
                                    className="pc-mtext">Phụ kiện</span><span
                                    className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="list-accessory.html">Danh sách
                                        phụ
                                        kiện</a></li>
                                    <li className="pc-item"><a className="pc-link" href="add-accessory.html">Thêm phụ
                                        kiện</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item">
                                <a href="products-status.html" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone">history_edu</i></span><span
                                    className="pc-mtext">Tình trạng đơn hàng</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Quản lý tin tức</label>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone"
                                    data-feather="file-minus"></i></span><span
                                    className="pc-mtext">Tin tức</span><span className="pc-arrow"><i
                                    data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="list-blog.html">Danh sách tin
                                        tức</a>
                                    </li>
                                    <li className="pc-item"><a className="pc-link" href="add-blog.html">Thêm tin tức</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Tài khoản</label>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone"
                                    data-feather="cpu"></i></span><span
                                    className="pc-mtext">Admin</span><span className="pc-arrow"><i
                                    data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="list-admin.html">Danh sách
                                        admin</a>
                                    </li>
                                    <li className="pc-item"><a className="pc-link" href="add-admin.html">Thêm admin</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link"><span className="pc-micon"><i
                                    className="material-icons-two-tone"
                                    data-feather="user"></i></span><span
                                    className="pc-mtext">Người dùng</span><span className="pc-arrow"><i
                                    data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="list-user.html">Danh sách người
                                        dùng</a></li>
                                    <li className="pc-item"><a className="pc-link" href="add-user.html">Thêm người
                                        dùng</a></li>
                                </ul>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Quản lý bình luận</label>
                            </li>
                            <li className="pc-item">
                                <a href="list-comment.html" className="pc-link"><span className="pc-micon"><i
                                    data-feather="message-circle">history_edu</i></span><span
                                    className="pc-mtext">Bình luận</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="pc-header">
                <div className="header-wrapper">
                    <div className="page-header-title">
                        <h5 className="m-b-10" style={{marginTop: '28px', fontWeight: 'bolder', fontSize: '1rem'}}>QUẢN
                            LÝ CỬA HÀNG THÚ
                            CƯNG</h5>
                    </div>
                    <div className="ml-auto">
                        <ul className="list-unstyled">
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown"
                                   href="#"
                                   role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="material-icons-two-tone">search</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right pc-h-dropdown drp-search">
                                    <form className="px-3">
                                        <div className="form-group mb-0 d-flex align-items-center">
                                            <i data-feather="search"></i>
                                            <input type="search" className="form-control border-0 shadow-none"
                                                   placeholder="Search here. . ."/>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown"
                                   href="#"
                                   role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src={require("./assets/images/user/avatar-2.png")} alt="user-image"
                                         className="user-avtar"/>
                                    <span>
								<span className="user-name-admin">Admin</span>
                            <span className="user-desc">Quản lý cấp 1</span>
                            </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right pc-h-dropdown">
                                    <div className=" dropdown-header">
                                        <h5 className="text-overflow m-0"><span className="badge bg-light-primary"><a
                                            href="https://gumroad.com/dashboardkit"
                                            target="_blank">Thêm admin mới</a></span></h5>
                                    </div>
                                    <a href="#!" className="dropdown-item">
                                        <i className="material-icons-two-tone">account_circle</i>
                                        <span>Tài khoản của tôi</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="material-icons-two-tone">chrome_reader_mode</i>
                                        <span>Đăng xuất</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>

            <div className="pc-container">
                <div className="pcoded-content">
                    <div className="page-header-admin">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Quản lý</a></li>
                                        <li className="breadcrumb-item">Quản lý chung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card flat-card">
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">group</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>953</h5>
                                                <span>Khách hàng</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">language</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>310 triệu</h5>
                                                <span>Lợi nhuận</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">unarchive</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>34</h5>
                                                <span>vận chuyển</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table">
                                    <div className="col-sm-6 card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">swap_horizontal_circle</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>04</h5>
                                                <span>Trả về</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">cloud_download</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>350</h5>
                                                <span>Người dùng</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <i className="material-icons-two-tone text-primary mb-1">shopping_cart</i>
                                            </div>
                                            <div className="col-sm-8 text-md-center">
                                                <h5>75%</h5>
                                                <span>Trạng thái</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card support-bar overflow-hidden">
                                        <div className="card-body pb-0">
                                            <h2 className="m-0">75.38%</h2>
                                            <span className="text-primary">Đơn hàng hoàn tất</span>
                                            <p className="mb-3 mt-3">Số lượng đơn hàng đã vận chuyển thành công trong
                                                tháng </p>
                                        </div>
                                        <div id="support-chart"></div>
                                        <div
                                            className="card-footer border-0 bg-primary text-white background-pattern-white">
                                            <div className="row text-center">
                                                <div className="col">
                                                    <h4 className="m-0 text-white">20</h4>
                                                    <span>08/2021</span>
                                                </div>
                                                <div className="col">
                                                    <h4 className="m-0 text-white">15</h4>
                                                    <span>09/2021</span>
                                                </div>
                                                <div className="col">
                                                    <h4 className="m-0 text-white">19</h4>
                                                    <span>10/2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card support-bar overflow-hidden">
                                        <div className="card-body pb-0">
                                            <h2 className="m-0">112</h2>
                                            <span className="text-primary">Đơn hàng đã vận chuyển</span>
                                            <p className="mb-3 mt-3">Tổng số lượng đơn hàng đã vận chuyển trong
                                                tháng</p>
                                        </div>
                                        <div className="card-footer border-0">
                                            <div className="row text-center">
                                                <div className="col">
                                                    <h4 className="m-0">35</h4>
                                                    <span>8/2021</span>
                                                </div>
                                                <div className="col">
                                                    <h4 className="m-0">47</h4>
                                                    <span>9/2021</span>
                                                </div>
                                                <div className="col">
                                                    <h4 className="m-0">30</h4>
                                                    <span>10/2021</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="support-chart1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Thống kê doanh thu của cửa hàng</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row pb-2">
                                        <div className="col-auto m-b-10">
                                            <h3 className="mb-1">724.000.000đ</h3>
                                            <span>Tổng doanh thu</span>
                                        </div>
                                        <div className="col-auto m-b-10">
                                            <h3 className="mb-1">315.000.000đ</h3>
                                            <span>Trung bình</span>
                                        </div>
                                    </div>
                                    <div id="account-chart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h6>Đánh giá của khách hàng</h6>
                                    <span>Tổng hợp tất cả đánh giá của khách hàng</span>
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <div className="col">
                                            <div id="satisfaction-chart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card table-card">
                                <div className="card-header">
                                    <h5>Trạng thái công việc</h5>
                                </div>
                                <div className="pro-scroll" style={{height: "255px", position: "relative"}}>
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table table-hover m-b-0">
                                                <thead>
                                                <tr>
                                                    <th>Tên công việc</th>
                                                    <th>Số lượng</th>
                                                    <th>Trạng thái</th>
                                                    <th>Chỉnh sửa</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Nhập 10 chó Husky</td>
                                                    <td style={{textAlign: "center"}}>1</td>
                                                    <td>
                                                        <div><label className="badge bg-light-warning">Đang thực
                                                            hiện</label></div>
                                                    </td>
                                                    <td style={{textAlign: "center"}}><a href="#!"><i
                                                        className="icon feather icon-edit f-16  text-success"></i></a><a
                                                        href="#!"><i
                                                        className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Nhập 40 áo len cún</td>
                                                    <td style={{textAlign: "center"}}>2</td>
                                                    <td>
                                                        <div><label className="badge bg-light-danger">Đã hủy</label>
                                                        </div>
                                                    </td>
                                                    <td style={{textAlign: "center"}}><a href="#!"><i
                                                        className="icon feather icon-edit f-16  text-success"></i></a><a
                                                        href="#!"><i
                                                        className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card prod-p-card background-pattern">
                                        <div className="card-body">
                                            <div className="row align-items-center m-b-0">
                                                <div className="col">
                                                    <h6 className="m-b-5">Tổng sản phẩm</h6>
                                                    <h3 className="m-b-0">630</h3>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="material-icons-two-tone text-primary">card_giftcard</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card prod-p-card bg-primary background-pattern-white">
                                        <div className="card-body">
                                            <div className="row align-items-center m-b-0">
                                                <div className="col">
                                                    <h6 className="m-b-5 text-white">Tổng đơn đặt hàng</h6>
                                                    <h3 className="m-b-0 text-white">256</h3>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="material-icons-two-tone text-white">local_mall</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card prod-p-card bg-primary background-pattern-white">
                                        <div className="card-body">
                                            <div className="row align-items-center m-b-0">
                                                <div className="col">
                                                    <h6 className="m-b-5 text-white">Lãi trung bình</h6>
                                                    <h3 className="m-b-0 text-white">60%</h3>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="material-icons-two-tone text-white">monetization_on</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card prod-p-card background-pattern">
                                        <div className="card-body">
                                            <div className="row align-items-center m-b-0">
                                                <div className="col">
                                                    <h6 className="m-b-5">Số sản phẩm đã bán</h6>
                                                    <h3 className="m-b-0">205</h3>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="material-icons-two-tone text-primary">local_offer</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card feed-card">
                                <div className="card-header">
                                    <h5>Thông báo</h5>
                                </div>
                                <div className="feed-scroll ps" style={{height: '385px', position: 'relative'}}>
                                    <div className="card-body">
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="fa-solid fa-cart-shopping bg-light-primary feed-icon p-2 wid-30 hei-30"></i>
                                            </div>
                                            <div className="col">
                                                <a href="#!">
                                                    <h6 className="m-b-5">Bạn có 5 order mới<span
                                                        className="text-muted float-right f-14">Vừa xong</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i data-feather="shopping-cart"
                                                   className="bg-light-danger feed-icon p-2 wid-30 hei-30"></i>
                                            </div>
                                            <div className="col">
                                                <a href="#!">
                                                    <h6 className="m-b-5">Đã nhận 3 order <span
                                                        className="text-muted float-right f-14">30 phút trước</span>
                                                    </h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i data-feather="file-text"
                                                   className="bg-light-success feed-icon p-2 wid-30 hei-30"></i>
                                            </div>
                                            <div className="col">
                                                <a href="#!">
                                                    <h6 className="m-b-5">Bạn có 3 công việc mới <span
                                                        className="text-muted float-right f-14">Vừa xong</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminDashboard;