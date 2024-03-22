import React from "react";
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../general/Breadcrumb";
import LeftSideBar from "../my-account/sub-components/LeftSideBar";

const AddNewAddress = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="container d-flex mt-5 mb-5">
                <LeftSideBar/>
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
                                        <div className="col-md-12"><label className="labels"
                                                                          style={{paddingTop: "10px"}}>Số
                                            điện
                                            thoại</label><input id="phone" type="text" className="form-control"
                                                                name="phone"
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
        </>
    );
}
export default AddNewAddress;
