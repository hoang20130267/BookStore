import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {useDispatch} from "react-redux";
import {changeForgotPass, sendEmail} from "../../../store/apiRequest";

const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [changePage, setChangePage] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [newPass, setNewPass] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);
    const [popupInfo, setPopupInfo] = useState({ message: '', type: '', visible: false });
    const handleSendEmail = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setShowErrorMessage(false);
        if (email === "") {
            setErrorMessage("Vui lòng nhập email");
            setShowErrorMessage(true);
            return;
        }
        try {
            const response = await sendEmail({
                email: email,
                type: 1
            });
            if (response.status === 200) {
                setPopupInfo({ message: "Gửi email thành công!", type: 'success', visible: true });
                setChangePage(true);
            } else {
                setErrorMessage("Không tìm thấy email");
                setShowErrorMessage(true);
            }
        } catch (e) {
            setErrorMessage("Lỗi không xác định");
            setShowErrorMessage(true);
        }
    }
    const handleChangeForgotPass = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setShowErrorMessage(false);
        if (otp === "") {
            setErrorMessage("Vui lòng nhập OTP");
            return;
        }
        if (newPass === "") {
            setErrorMessage("Vui lòng nhập mật khẩu mới");
            return;
        }
        try {
            const response = await changeForgotPass({
                email: email,
                otp: otp,
                newPassword: newPass
            });
            if (response.status === 200)
                setPopupInfo({ message: "Thay đổi mật khẩu thành công!", type: 'successForgot', visible: true });
            else {
                setPopupInfo({ message: "Thay đổi mật khẩu thất bại!", type: 'error', visible: true });
            }
        } catch (e) {
            setErrorMessage("OTP không đúng");
            setShowErrorMessage(true);
        }
    }
    const handleChangeAction = () => {
        setChangePage(!changePage);
        setErrorMessage("");
        setShowErrorMessage(false);
    };

    const hidePopup = () => {
        setPopupInfo((prevInfo) => ({ ...prevInfo, visible: false }));
    };
    const hidePopupForgot = () => {
        setPopupInfo((prevInfo) => ({ ...prevInfo, visible: false }));
        navigate("/sign-in");
    };
    return (
        <>
            <div className={`popup popup--icon -success js_success-popup ${popupInfo.visible && popupInfo.type === 'success' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thành công
                    </h3>
                    <p style={{marginBottom:"10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--success" data-for="js_success-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>

            <div className={`popup popup--icon -success js_success-popup ${popupInfo.visible && popupInfo.type === 'successForgot' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thành công
                    </h3>
                    <p style={{marginBottom:"10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--success" data-for="js_success-popup"
                                onClick={hidePopupForgot}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>

            <div className={`popup popup--icon -error js_error-popup ${popupInfo.visible && popupInfo.type === 'error' ? 'popup--visible' : ''}`}>
                <div className="popup__background"></div>
                <div className="popup__content">
                    <h3 className="popup__content__title">
                        Thất bại
                    </h3>
                    <p style={{marginBottom:"10px"}}>{popupInfo.message}</p>
                    <p>
                        <button className="button-popup button--error" data-for="js_error-popup"
                                onClick={hidePopup}>Ẩn thông báo
                        </button>
                    </p>
                </div>
            </div>
            <Breadcrumb/>
            {!changePage && <>
                <div className="content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 my-5 contents">
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
                                                {showErrorMessage && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errorMessage}
                                                    </div>
                                                )}
                                                <button className="button_login d-flex justify-content-center"
                                                        type={"submit"}
                                                        style={{
                                                            paddingBottom: "13px", border: "none", fontSize: "18px"
                                                            , fontWeight: "bold", maxWidth: '100%'
                                                        }}
                                                        onSubmit={handleSendEmail}
                                                        onPress={handleChangeAction}> Gửi mã OTP
                                                </button>
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
                            <div className="col-md-6 my-5 contents">
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
                                        <div className="form-block">
                                            <div className="mb-4">
                                                <h3>Quên mật khẩu</h3>
                                            </div>
                                            <form onSubmit={handleChangeForgotPass}>
                                                <div className="form-group first">
                                                    <p>OTP</p>
                                                    <input type="text" className="form-control" id="OTP"
                                                           onChange={e => setOtp(e.target.value)}/>
                                                    <p>Mật khẩu mới</p>
                                                    <input type="text" className="form-control" id="newPass"
                                                           onChange={e => setNewPass(e.target.value)}/>

                                                </div>
                                                {showErrorMessage && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errorMessage}
                                                    </div>
                                                )}
                                                <button className="button_login justify-content-center d-flex" type={"submit"}
                                                        style={{
                                                            paddingBottom: "13px", border: "none"
                                                            , fontSize: "18px"
                                                            , fontWeight: "bold", maxWidth: '100%'
                                                        }}>Đặt lại mật khẩu
                                                </button>
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
        </>
    );
}
export default ForgotPassword;