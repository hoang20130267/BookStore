import React from "react";
import "../../assets/css/style-header.css"
import {Link} from "react-router-dom";

const UserMenu = () => {
    return (
        <div className="fhs_top_account_dropdown fhs_dropdown right min">
            <div>
                <Link className="fhs_center_left" to="/user/account">
                    <span className="icon_bill_gray" style={{marginRight: "8px"}}>
                        <i className="fa-regular fa-user"></i>
                    </span>
                    <span>Tài khoản của tôi</span></Link>
            </div>
            <div style={{borderTop: "1px solid #F2F4F5"}}>
                <Link className="fhs_center_left" to="/admin">
                    <span className="icon_bill_gray" style={{marginRight: "8px"}}>
                        <i className="fa-solid fa-shop"></i>
                    </span>
                    <span>Quản lý cửa hàng</span></Link>
            </div>
            <div style={{borderTop: "1px solid #F2F4F5"}}>
                <Link className="fhs_center_left" to="/user/order">
                    <span className="icon_bill_gray" style={{marginRight: "8px"}}>
                        <i className="fa-solid fa-clipboard-list"></i>
                    </span>
                    <span>Đơn hàng của tôi</span></Link>
            </div>
            <div style={{borderTop: "1px solid #F2F4F5"}}>
                <Link className="fhs_center_left" to="/user/wishlist">
                    <span className="icon_bill_gray" style={{marginRight: "8px"}}>
                        <i className="fa-regular fa-heart"></i>
                    </span>
                    <span>Sản phẩm yêu thích</span></Link>
            </div>
            <div style={{borderTop: "1px solid #F2F4F5"}}>
                <Link className="fhs_center_left" to="/sales/order/history/">
                    <span className="icon_bill_gray" style={{marginRight: "8px"}}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </span>
                    <span>Thoát khỏi tài khoản</span></Link>
            </div>
        </div>
    );
}
export default UserMenu;