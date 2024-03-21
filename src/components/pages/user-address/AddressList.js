import React from "react";
import {Link, useLocation} from "react-router-dom";
import "../../../assets/css/style-addresslist.css"
import Breadcrumb from "../../general/Breadcrumb";

const AddressList = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
        <div className="container d-flex" style={{marginBottom: "40px"}}>
            <div className="col-md-3 d-block">
                <div className="left-side">
                    <div className="stardust-dropdown">
                        <Link className="sidebar-item" to={"/my-account"}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div style={{lineHeight: "1rem"}}><span className="item-name" style={{fontWeight: 500}}>Tài khoản của tôi</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="left-side">
                    <div className="stardust-dropdown">
                        <Link className="sidebar-item" to={"/address-list"}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-location-dot"/>
                            </div>
                            <div style={{lineHeight: "1rem"}}><span className="item-name" style={{fontWeight: 500}}>Địa chỉ</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="left-side">
                    <div className="stardust-dropdown">
                        <Link className="sidebar-item" to={"/my-orders"}>
                            <div className="sidebar-item-icon">
                                <i className="fa-solid fa-clipboard"></i>
                            </div>
                            <div style={{lineHeight: "1rem"}}><span className="item-name" style={{fontWeight: 500}}>Đơn hàng của tôi</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="d-flex flex-column" role="main">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center address-title-div">
                            <div className="flex-1">
                                <div className="address-title">Địa chỉ của tôi</div>
                            </div>
                            <div>
                                <div className="">
                                    <div style={{display: "flex"}}>
                                        <Link to={"/user/address/new"}>
                                            <button className="button-solid button-solid--primary">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="d-flex align-items-center"
                                                         style={{marginRight: "10px"}}>
                                                        <i className="fa-regular fa-plus"></i>
                                                    </div>
                                                    <div>Thêm địa chỉ mới</div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{padding: "12px 30px 0"}}>
                                <div className="list-title">Địa chỉ</div>
                                <div className="address-item-container">
                                    <div className="address-item">
                                        <div role="heading" className="d-flex justify-content-between"
                                             style={{marginBottom: "4px"}}>
                                            <div className="address-card_header">
                                                <span className="name-span">
                                                    <div className="user-name">Nguyễn Nhất Đăng Khoa</div>
                                                </span>
                                                <div className="separate"></div>
                                                <div role="row" className="phone-number d-flex align-items-center">(+84)
                                                    123456789
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end" style={{flexBasis: "40px"}}>
                                                <button className="function-button update-button">Cập nhật</button>
                                            </div>
                                        </div>
                                        <div className="address-card_content d-flex justify-content-between"
                                             role="heading"
                                             style={{marginBottom: "4px"}}>
                                            <div className="flex-grow-1 d-flex"
                                                 style={{overflowX: "hidden", marginRight: "8px"}}>
                                                <div className="address-content">
                                                    <div role="row" className="d-flex align-items-center">KTX Khu B
                                                        DHQG
                                                    </div>
                                                    <div role="row" className="d-flex align-items-center">Phường Linh
                                                        Xuân, Thành Phố Thủ
                                                        Đức,
                                                        TP. Hồ Chí Minh
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end"
                                                 style={{paddingTop: "4px", flexBasis: "40px"}}>
                                                <button className="set-default-button" disabled={true}>Thiết lập mặc
                                                    định
                                                </button>
                                            </div>
                                        </div>
                                        <div id="address-card_badge" role="row"
                                             className="d-flex align-items-center">
                                            <span role="mark" className="span-default">Mặc định</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="address-item-container">
                                    <div className="address-item">
                                        <div role="heading" className="d-flex justify-content-between"
                                             style={{marginBottom: "4px"}}>
                                            <div className="address-card_header">
                                                <span className="name-span">
                                                    <div className="user-name">Nguyễn Nhất Đăng Khoa</div>
                                                </span>
                                                <div className="separate"></div>
                                                <div role="row" className="phone-number d-flex align-items-center">(+84)
                                                    123456789
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end" style={{flexBasis: "40px"}}>
                                                <button className="function-button update-button">Cập nhật</button>
                                                <button className="function-button delete-button">Xóa</button>
                                            </div>
                                        </div>
                                        <div className="address-card_content d-flex justify-content-between"
                                             role="heading"
                                             style={{marginBottom: "4px"}}>
                                            <div className="flex-grow-1 d-flex"
                                                 style={{overflowX: "hidden", marginRight: "8px"}}>
                                                <div className="address-content">
                                                    <div role="row" className="d-flex align-items-center">KTX Khu B
                                                        DHQG
                                                    </div>
                                                    <div role="row" className="d-flex align-items-center">Phường Linh
                                                        Xuân, Thành Phố Thủ
                                                        Đức,
                                                        TP. Hồ Chí Minh
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end"
                                                 style={{paddingTop: "4px", flexBasis: "40px"}}>
                                                <button className="set-default-button" disabled="">Thiết lập mặc định
                                                </button>
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
        </>
    );
}
export default AddressList;