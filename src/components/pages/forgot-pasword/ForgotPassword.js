import React from "react";
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../general/Breadcrumb";

const ForgotPassword = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="form-block">
                                        <div className="mb-4">
                                            <h3>Quên mật khẩu</h3>
                                        </div>
                                        <form>
                                            <div className="form-group first">
                                                <p>Email hoặc số điện thoại</p>
                                                <input type="text" className="form-control" id="username"/>

                                            </div>
                                            <a href="#" style={{textDecoration: "none"}}>
                                                <div className="button_forgot">Đặt lại mật khẩu</div>
                                            </a>
                                            <Link to={"/sign-in"} className="d-block text-center my-4 text-muted"
                                                  style={{textDecoration: "none"}}> Đăng nhập</Link>
                                        </form>
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
export default ForgotPassword;