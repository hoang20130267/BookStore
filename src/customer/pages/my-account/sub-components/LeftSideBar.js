import React from "react";
import SideBarItem from "./SideBarItem";

const LeftSideBar = () => {
    return (
        <div className="col-md-3 d-block p-0 pr-6">
            <div className="account-of">
                <img
                    src="https://i.ibb.co/C1ymX1n/user.png"
                    alt="avatar"/>
                <div className="info">
                    Tài khoản của
                    <strong>Nguyễn Nhất Đăng Khoa</strong>
                </div>
            </div>
            <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                <SideBarItem to="/user/account" iconClassName="fa-solid fa-user" itemName="Thông tin tài khoản"/>
                <SideBarItem to="/user/address" iconClassName="fa-solid fa-location-dot" itemName="Sổ địa chỉ"/>
                <SideBarItem to="/user/order" iconClassName="fa-solid fa-clipboard" itemName="Đơn hàng của tôi"/>
            </ul>
        </div>
    );
}
export default LeftSideBar;
