import React from "react";
import "../../assets/css/style-myaccount.css"
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import LeftSideBar from "./sub-components/LeftSideBar";

const MyAccount = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="container d-flex mt-5 mb-5 px-0">
                <LeftSideBar/>
                <form method="post" encType="multipart/form-data" className="infor_user">
                    <div className="row border py-3 m-0" style={{borderRadius: "10px"}}>
                        <div className="col-md-8 border-right">
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
                                <div className="d-flex align-items-center mt-4">
                                    <label className="mb-0 mr-8">Giới tính</label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="male"/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Nam</span>
                                    </label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="female"/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Nữ</span>
                                    </label>
                                    <label className="label-radio">
                                        <input type="radio" name="gender" value="other"/>
                                        <span className="radio-fake"></span>
                                        <span className="label">Khác</span>
                                    </label>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <label className="labels mb-0 mr-8">Ngày sinh</label>
                                    <div className="select-birthday">
                                        <select name="day">
                                            <option value="0">Ngày</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <select name="month">
                                            <option value="0">Tháng</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select name="year">
                                            <option value="0">Năm</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12 d-flex align-items-center">
                                        <input type="checkbox" id="checkbox" className="mr-2"
                                               style={{width: "15px", height: "15px"}}/>
                                        <label className="form-check-label" style={{marginTop: "2px"}}>Đổi mật
                                            khẩu</label>
                                    </div>
                                    <div className="mt-3 w-100">
                                        <div className="col-md-12"><label className="labels">Mật khẩu hiện
                                            tại</label><input
                                            type="password" id="current-password" className="form-control"
                                            name="current-password"
                                            placeholder="Nhập mật khẩu hiện tại"/>
                                        </div>
                                        <br/>
                                        <div className="col-md-12"><label className="labels">Mật khẩu mới</label><input
                                            type="password" id="new-password" className="form-control"
                                            name="new-password"
                                            placeholder="Nhập mật khẩu mới"/>
                                        </div>
                                        <br/>
                                        <div className="col-md-12"><label className="labels">Nhập lại mật khẩu
                                            mới</label><input
                                            type="password" id="new-password-confirm" className="form-control"
                                            name="new-password-confirm" placeholder="Nhập lại mật khẩu mới"/>
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
                                    <div id="container">
                                        <input type="file" id="imageUpload" name="files" className="input-file"
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
        </>
    );
}
export default MyAccount;