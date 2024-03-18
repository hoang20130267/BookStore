import React from "react";
import "../../../assets/css/style-signin.css"
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="form-block">
                                    <div className="mb-4">
                                        <h3>Đăng nhập</h3>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first">
                                            <p> Tên đăng nhập</p>
                                            <input type="text" className="form-control" id="username"/>
                                        </div>
                                        <div className="form-group last mb-4">
                                            <p>Mật khẩu</p>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>

                                        <div className="d-flex mb-5 align-items-center">

                                            <span className="ml-auto"><Link to={"/forgot-password"}
                                                                         className="forgot-pass">Quên mật khẩu</Link></span>
                                        </div>
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <div className="button_login"> Đăng nhập</div>
                                        </a>
                                        <span className="d-block text-center my-4 text-muted"> Đăng nhập với:</span>

                                        <div className="social-login text-center">
                                            <Link to={"/not-found"} className="facebook">
                                                <span><i className="fa-brands fa-facebook-f"></i></span>
                                            </Link>
                                            <Link to={"/my-account"} className="twitter">
                                                <span><i className="fa-brands fa-twitter"></i></span>
                                            </Link>
                                            <a href="#" className="google">
                                                <span> <i className="fa-brands fa-google"></i></span>
                                            </a>

                                            <span className="d-block text-center my-4 text-muted"><Link
                                                to={"/sign-up"}
                                                style={{width: "60px", color: "#6c757d"}}>Đăng kí</Link> </span>
                                        </div>
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
export default SignIn;