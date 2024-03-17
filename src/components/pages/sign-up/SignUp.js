import React from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="form-block">
                                    <div className="mb-4">
                                        <h3>Đăng ký</h3>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first">
                                            <p> Tên đăng nhập</p>
                                            <input type="text" className="form-control" id="username"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <p> Email</p>
                                            <input type="email" className="form-control" id="username"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <p>Mật khẩu</p>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="form-group last mb-4">
                                            <p>Nhập lại mật khẩu</p>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>

                                        <a href="#" style={{textDecoration: "none"}}>
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
    );
}
export default SignUp;