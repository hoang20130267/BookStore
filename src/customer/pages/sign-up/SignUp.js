import React from "react";
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";

const SignUp = () => {
    const location = useLocation();
    return (
        <>
            <Breadcrumb location={location}/>
            <div className="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="form-block">
                                        <div className="mb-4">
                                            <h3>Đăng ký</h3>
                                        </div>
                                        <form>
                                            <div className="form-group first">
                                                <p> Tên đăng nhập</p>
                                                <input type="text" className="form-control" id="username"
                                                       name="username" required/>
                                            </div>
                                            <div className="form-group mb-4">
                                                <p> Email</p>
                                                <input type="email" className="form-control" id="email" name="email"
                                                       required/>
                                            </div>
                                            <div className="form-group mb-4">
                                                <p>Mật khẩu</p>
                                                <input type="password" className="form-control" id="password" required/>
                                            </div>
                                            <div className="form-group last mb-4">
                                                <p>Nhập lại mật khẩu</p>
                                                <input type="password" className="form-control" id="re-password"
                                                       name="re-password" required/>
                                            </div>

                                            <a href="sign-up#" style={{textDecoration: "none"}}>
                                                <div className="button_login"> Đăng ký</div>
                                            </a>
                                            <span
                                                className="d-block text-center my-4 text-muted">Bạn đã có tài khoản? <Link
                                                to={"/sign-in"}
                                                style={{width: "60px", color: "#6c757d"}}>Đăng nhập</Link> </span>
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
export default SignUp;