import React from "react";
import {Link} from "react-router-dom";

const AddNewAddress = () => {
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
            <div className="col-md-9">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Thêm địa chỉ mới</h4>
                    <p style={{
                        color: "#11ff02",
                        textAlign: "center",
                        textTransform: "none",
                        paddingTop: "5px"
                    }}>
                    </p>
                </div>
                <form method="post" encType="multipart/form-data" className="infor_user">
                    <div className="row">
                        <div className="col-md-6 border-right border-left">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="text-right">Thông tin liên hệ</h5>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Họ và tên</label>
                                        <input type="text" id="fullname" className="form-control" name="fullname"
                                               placeholder="Nhập họ tên"/>
                                    </div>
                                    <div className="col-md-12"><label className="labels" style={{paddingTop: "10px"}}>Số
                                        điện
                                        thoại</label><input id="phone" type="text" className="form-control" name="phone"
                                                            placeholder="Nhập số điện thoại tại đây"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="text-right">Địa chỉ</h5>
                                </div>
                                <div className="col-md-12">
                                    <label>Tỉnh/Thành phố:</label>
                                    <select id="province" className="pdw">
                                        <option value="">Tỉnh/Thành phố</option>
                                    </select>
                                    <br/>
                                    <label>Quận/Huyện:</label>
                                    <select id="district" className="pdw">
                                        <option value="">Quận/Huyện</option>
                                    </select>
                                    <br/>
                                    <label>Phường/Xã:</label>
                                    <select id="ward" className="pdw">
                                        <option value="">Phường/Xã</option>
                                    </select>
                                    <br/>
                                    <input type="text" id="soNha" className="form-control"
                                           placeholder="Số nhà, Tên đường"/>
                                    <br/>
                                    <div id="error" style={{textAlign: "center", color: "red"}}></div>
                                </div>
                                <p style={{
                                    color: "red",
                                    textAlign: "center",
                                    textTransform: "none",
                                    paddingTop: "5px"
                                }}>
                                </p>
                                <div className="mt-3 text-center">
                                    <button className="btn btn-primary profile-button" type="submit">Thêm địa chỉ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddNewAddress;
