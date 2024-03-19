import React from "react";
import "../../../assets/css/style-myaccount.css"
import {Link} from "react-router-dom";

const MyAccount = () => {
    return (
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
            <form method="post" encType="multipart/form-data" className="infor_user">
                <div className="row">
                    <div className="col-md-8 border-right border-left">
                        <div className="">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Thông tin tài khoản</h4>

                                <p style={{
                                    color: "#11ff02",
                                    textAlign: "center",
                                    textTransform: "none",
                                    paddingTop: "5px"
                                }}>
                                </p>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Tên đăng nhập</label>
                                    <input type="text" id="username" className="form-control" name="username"
                                           placeholder="Nhập username" readOnly/>
                                </div>
                                <div className="col-md-6"><label className="labels">Họ và tên</label>
                                    <input type="text" id="fullname" className="form-control" name="fullname"
                                           placeholder="Nhập họ tên"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Email</label>
                                    <input type="email" id="email" className="form-control" name="email"
                                           placeholder="Nhập email tại đây" readOnly/>
                                </div>
                                <div className="col-md-12"><label className="labels" style={{paddingTop: "10px"}}>Số
                                    điện
                                    thoại</label><input id="phone" type="text" className="form-control" name="phone"
                                                        placeholder="Nhập số điện thoại tại đây"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 d-flex align-items-center">
                                    <input type="checkbox" id="checkbox" className="mr-2"
                                           style={{width: "15px", height: "15px"}}/>
                                    <label className="form-check-label" style={{marginTop: "2px"}}>Đổi mật khẩu</label>
                                </div>
                                <div className="mt-3 w-100">
                                    <div className="col-md-12"><label className="labels">Mật khẩu hiện tại</label><input
                                        type="password" id="newpass" className="form-control" name="oldpass"
                                        placeholder="Nhập mật khẩu hiện tại"/>
                                    </div>
                                    <br/>
                                    <div className="col-md-12"><label className="labels">Mật khẩu mới</label><input
                                        type="password" id="newpass" className="form-control" name="newpass"
                                        placeholder="Nhập mật khẩu mới"/>
                                    </div>
                                    <br/>
                                    <div className="col-md-12"><label className="labels">Nhập lại mật khẩu
                                        mới</label><input
                                        type="password" id="newpassconfirm" className="form-control"
                                        name="newpassconfirm" placeholder="Nhập lại mật khẩu mới"/>
                                    </div>

                                    <p style={{
                                        color: "red",
                                        textAlign: "center",
                                        textTransform: "none",
                                        paddingTop: "5px"
                                    }}>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="submit">Lưu thông tin
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div className="image-container">
                                <div id="container">
                                    <div className="avatar-wrapper">
                                        <img className="img-avt-review profile-pic"
                                             src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1710633600&semt=ais"/>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container">
                                <div id="container<%=i%>">
                                    <input type="file" id="image<%=i%>" name="files" className="input-file"
                                           accept="image/*"/>
                                </div>
                            </div>

                            <input type="text" id="deletedFile" value="" style={{display: "none"}}/>
                            <span className="font-weight-bold"></span>
                            <span className="text-black-50"></span><span> </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default MyAccount;