import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="site-footer_v12">
            <div className="space-top-2 border-top">
                <div className="pb-5 space-bottom-lg-3">
                    <div className="container">
                        <div className="row footer-top-row">
                            <div className="col-md-4 col-lg-2 mb-5 mb-lg-0">
                                <div id="nav_menu-2" className="widget widget_nav_menu mb-6 mb-lg-8">
                                    <h4 className="widget-title font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Khám
                                        phá
                                    </h4>
                                    <div className="menu-footer-widget-menu-1-container">
                                        <ul id="menu-footer-widget-menu-1" className="menu">
                                            <li id="menu-item-203"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-203">
                                                <Link to="#">Về chúng
                                                    tôi</Link>
                                            </li>
                                            <li id="menu-item-211"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-211">
                                                <Link to="#">Chính
                                                    sách</Link>
                                            </li>
                                            <li id="menu-item-216"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216">
                                                <Link to="#">Đánh dấu sách</Link>
                                            </li>
                                            <li id="menu-item-218"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-218">
                                                <Link to="/sign-in">Đăng nhập/Đăng
                                                    ký</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mb-5 mb-lg-0">
                                <div id="nav_menu-3" className="widget widget_nav_menu mb-6 mb-lg-8">
                                    <h4 className="widget-title font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Dịch
                                        vụ khách hàng
                                    </h4>
                                    <div className="menu-footer-widget-menu-2-container">
                                        <ul id="menu-footer-widget-menu-2" className="menu">
                                            <li id="menu-item-225"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-225">
                                                <Link to="#">Trung tâm trợ
                                                    giúp</Link>
                                            </li>
                                            <li id="menu-item-220"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-220">
                                                <Link to="#">Trả hàng</Link>
                                            </li>
                                            <li id="menu-item-223"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-223">
                                                <Link to="/contact">Liên hệ</Link>
                                            </li>
                                            <li id="menu-item-224"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224">
                                                <Link to="#">Tìm cửa hàng</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-2 mb-5 mb-lg-0">
                                <div id="nav_menu-4" className="widget widget_nav_menu mb-6 mb-lg-8">
                                    <h4 className="widget-title font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Chính
                                        sách</h4>
                                    <div className="menu-footer-widget-menu-3-container">
                                        <ul id="menu-footer-widget-menu-3" className="menu">
                                            <li id="menu-item-226"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226">
                                                <Link to="#">Chính sách trả
                                                    hàng</Link>
                                            </li>
                                            <li id="menu-item-229"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-229">
                                                <Link to="#">Điều
                                                    khoản
                                                    sử dụng</Link></li>
                                            <li id="menu-item-232"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-232">
                                                <Link to="#">Bảo mật</Link>
                                            </li>
                                            <li id="menu-item-233"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-233">
                                                <Link to="#">Riêng tư</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 mb-5 mb-lg-0">
                                <div className="textwidget custom-html-widget">
                                    <div className="pb-6">
                                        <h4 className="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Liên hệ với
                                            chúng tôi</h4>
                                        <address className="font-size-2 mb-5">
                                        <span className="mb-2 font-weight-normal link-black-100">
                                            Linh Trung, Thủ Đức<br/> Thành phố Hồ Chí Minh
                                        </span>
                                        </address>
                                        <div className="mb-4">
                                            <Link to="mailto:sale@bookworm.com"
                                                  className="font-size-2 d-block link-black-100 mb-1">goldleaf@gmail.com</Link>
                                            <Link to="tel:+1246-345-0695"
                                                  className="font-size-2 d-block link-black-100">+84
                                                765 999 111</Link>
                                        </div>
                                        <ul className="list-unstyled mb-0 d-flex ml-0">
                                            <li className="btn1 pl-0">
                                                <Link className="link-black-100" to="#">
                                                    <span className="fab fa-instagram"></span>
                                                </Link>
                                            </li>
                                            <li className="btn1">
                                                <Link className="link-black-100" to="#">
                                                    <span className="fab fa-facebook-f"></span>
                                                </Link>
                                            </li>
                                            <li className="btn1">
                                                <Link className="link-black-100" to="#">
                                                    <span className="fab fa-youtube"></span>
                                                </Link>
                                            </li>
                                            <li className="btn1">
                                                <Link className="link-black-100" to="#">
                                                    <span className="fab fa-twitter"></span>
                                                </Link>
                                            </li>
                                            <li className="btn1">
                                                <Link className="link-black-100" to="#">
                                                    <span className="fab fa-pinterest"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-5 mb-lg-0">
                                <div id="wpforms-widget-2" className="widget wpforms-widget mb-6 mb-lg-8">
                                    <h4 className="widget-title font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">Tham
                                        gia với chúng tôi
                                    </h4>
                                    <div className="wpforms-container wpforms-container-full" id="wpforms-441">
                                        <form id="wpforms-form-441" className="wpforms-validate wpforms-form"
                                              data-formid="441" method="post" encType="multipart/form-data"
                                              action="/home-v12/" data-token="da5eaac0da4a1a1c8df58ecb6f6880a0">
                                            <div className="wpforms-head-container">
                                                <div className="wpforms-description">Trở thành thành viên trong hội
                                                    những người yêu thích sách
                                                </div>
                                            </div>
                                            <div className="wpforms-field-container">
                                                <div id="wpforms-441-field_1-container"
                                                     className="wpforms-field wpforms-field-email" data-field-id="1">
                                                    <label className="wpforms-field-label wpforms-label-hide"
                                                           htmlFor="wpforms-441-field_1">Email <span
                                                        className="wpforms-required-label">*</span></label><input
                                                    type="email" id="wpforms-441-field_1"
                                                    className="wpforms-field-large wpforms-field-required"
                                                    name="wpforms[fields][1]" placeholder="Enter email"
                                                    spellCheck="false" required/>
                                                </div>
                                            </div>
                                            <div className="wpforms-submit-container">
                                                <input type="hidden" name="wpforms[id]" value="441"/>
                                                <input type="hidden" name="wpforms[author]" value="2"/>
                                                <input type="hidden" name="wpforms[post_id]" value="651"/>
                                                <button type="submit" name="wpforms[submit]" id="wpforms-submit-441"
                                                        className="wpforms-submit btn btn-primary-green text-white px-3 py-2 font-size-4 border-0"
                                                        data-alt-text="Sending..." data-submit-text="Submit"
                                                        aria-live="assertive" value="wpforms-submit">Submit &nbsp;
                                                    <i className="fa-solid fa-reply"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 bg-gray-200">
                    <div className="container">
                        <div className="d-lg-flex text-center text-lg-left justify-content-between align-items-center">

                            <p className="mb-3 mb-lg-0 font-size-2">&copy;2020 Gold Leaf. All rights reserved</p>

                            {/*<div className="d-lg-flex justify-content-xl-end align-items-center">*/}
                            {/*    <div className="mb-4 mb-lg-0 ml-auto">*/}
                            {/*        <img decoding="async" className="img-fluid"*/}
                            {/*             src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/img1.png"*/}
                            {/*             alt="Payment Info"/>*/}
                            {/*    </div>*/}
                            {/*    <select className="js-select selectpicker dropdown-select ml-md-3 mb-3 mb-md-0"*/}
                            {/*            data-style="border px-4 py-2 rounded-0 bg-transparent height-5 outline-none shadow-none form-control font-size-2"*/}
                            {/*            data-dropdown-align-right="true"*/}
                            {/*            data-width="fit">*/}
                            {/*        <option value="EN-US">*/}
                            {/*            VI - EN*/}
                            {/*        </option>*/}
                            {/*    </select>*/}
                            {/*    <select className="js-select selectpicker dropdown-select ml-md-3"*/}
                            {/*            data-style="border px-4 py-2 rounded-0 bg-transparent height-5 outline-none shadow-none form-control font-size-2"*/}
                            {/*            data-dropdown-align-right="true" data-width="fit">*/}
                            {/*        <option value="USD">*/}
                            {/*            Đồng*/}
                            {/*        </option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}