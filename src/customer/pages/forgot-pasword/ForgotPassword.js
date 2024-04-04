import React from "react";
import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {useDispatch} from "react-redux";
import {sendEmail} from "../../../store/apiRequest";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = React.useState("");
    const dispatch = useDispatch();
    const [changePage, setChangePage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const handleSendEmail = (e) => {
        e.preventDefault();
        if (email === "") {
            setErrorMessage("Vui lòng nhập email");
            return;
        }
        const sendMailOtp = {
            email: email
        };
        sendEmail(sendMailOtp, dispatch);
        console.log("Gửi mail thành công")
        setChangePage(true);
    }
    const handleChangeAction = () => {
        setChangePage(!changePage);
    };
    return (
        <>
            <Breadcrumb location={location}/>
            {!changePage && <>
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
                                            <form onSubmit={handleSendEmail}>
                                                <div className="form-group first">
                                                    <p>Email hoặc số điện thoại</p>
                                                    <input type="text" className="form-control" id="username"
                                                           onChange={e => setEmail(e.target.value)}/>
                                                </div>
                                                <button className="button_login" type={"submit"}
                                                        style={{paddingBottom:"13px",border:"none"
                                                            , marginLeft:"53px", fontSize:"18px"
                                                            , fontWeight:"bold"}}
                                                        onSubmit={handleSendEmail}
                                                        onPress={handleChangeAction}> Gửi mã OTP</button>
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
                </>}
            {changePage && <>
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
                                                    <p>Email</p>
                                                    <input type="text" className="form-control" id="email"/>
                                                    <p>OTP</p>
                                                    <input type="text" className="form-control" id="OTP"/>
                                                    <p>New Pass</p>
                                                    <input type="text" className="form-control" id="newPass"/>

                                                </div>
                                                <button className="button_login" type={"submit"}
                                                        style={{paddingBottom:"13px",border:"none"
                                                            , marginLeft:"53px", fontSize:"18px"
                                                            , fontWeight:"bold"}}>Đặt lại mật khẩu</button>
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
                    }
            )}
        </>
    );
}
export default ForgotPassword;