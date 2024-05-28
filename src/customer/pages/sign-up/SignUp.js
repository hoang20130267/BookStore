import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {registerUser, sendEmail} from "../../../store/apiRequest";
import {useDispatch} from "react-redux";
import {registerSuccess} from "../../../store/authSlice";
import PopupNotification from "../../components/general/PopupNotification";

const SignUp = () => {
    const location = useLocation();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const [changePage, setChangePage] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupInfo, setPopupInfo] = useState('');

    const handleClosePopup = () => {
        setShowPopup(false);
        navigate("/sign-in");
    };
    const handleRegister = (e) => {
        e.preventDefault();
        try {
            const response = registerUser(username, password, email, otp);
                dispatch(registerSuccess(response.data));
                setPopupInfo('Đăng ký thành công!');
                setShowPopup(true);
        } catch (error) {
            setErrorMessage("Email hoặc tên tài khoản đã tồn tại!");
            setShowErrorMessage(true);
        }
    }
    const handleSendEmail = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setShowErrorMessage(false);
        if (email === "") {
            setErrorMessage("Vui lòng nhập email");
            setShowErrorMessage(true);
            return;
        }
        if(username.length < 6){
            setErrorMessage("Tên đăng nhập phải có ít nhất 6 ký tự.");
            setShowErrorMessage(true);
            return;
        }
        if(password.length < 8){
            setErrorMessage("Mật khẩu phải có ít nhất 8 ký tự.");
            setShowErrorMessage(true);
            return;
        }
        if (password !== repeatPassword) {
            setErrorMessage("Mật khẩu và mật khẩu lặp lại không trùng khớp.");
            setShowErrorMessage(true);
            return;
        }
        try {
            const response = await sendEmail({
                email: email,
                type:0
            });
            if (response.status === 200) {
                setChangePage(true);
            }
        } catch (e) {
            setErrorMessage("Email đã tồn tại.");
            setShowErrorMessage(true);
        }
    }
    const handleChangeAction = () => {
        setChangePage(!changePage);
        setErrorMessage("");
        setShowErrorMessage(false);
    };
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
                                    {!changePage && <>
                                        <form onSubmit={handleSendEmail}>
                                            <div className="form-group first">
                                                <p> Tên đăng nhập</p>
                                                <input type="text" className="form-control" id="username"
                                                       name="username" required
                                                       onChange={e => setUsername(e.target.value)}/>
                                            </div>
                                            <div className="form-group mb-4">
                                                <p> Email</p>
                                                <input type="email" className="form-control" id="email" name="email"
                                                       required
                                                       onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="form-group mb-4">
                                                <p>Mật khẩu</p>
                                                <input type="password" className="form-control" id="password" required
                                                       onChange={e => setPassword(e.target.value)}/>
                                            </div>
                                            <div className="form-group last mb-4">
                                                <p>Nhập lại mật khẩu</p>
                                                <input type="password" className="form-control" id="re-password"
                                                       name="re-password" required
                                                       onChange={e => setRepeatPassword(e.target.value)}/>
                                            </div>
                                            {showErrorMessage && (
                                                <div className="alert alert-danger" role="alert">
                                                    {errorMessage}
                                                </div>
                                            )}
                                            <button className="button_login d-flex justify-content-center" type={"submit"}
                                                    style={{
                                                        paddingBottom: "13px", border: "none", fontSize: "18px"
                                                        , fontWeight: "bold"
                                                    }} onPress={handleChangeAction}> Đăng ký
                                            </button>
                                            <span
                                                className="d-block text-center my-4 text-muted">Bạn đã có tài khoản? <Link
                                                to={"/sign-in"}
                                                style={{width: "60px", color: "#6c757d"}}>Đăng nhập</Link> </span>
                                        </form>
                                    </>}
                                    {changePage && <>
                                                <form onSubmit={handleRegister}>
                                                    <div className="form-group first">
                                                        <p> Mã xác nhận</p>
                                                        <input type="text" className="form-control" id="otp"
                                                               name="otp" required
                                                               onChange={e => setOtp(e.target.value)}/>
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
                                                                , fontWeight: "bold"
                                                            }}> Xác nhận
                                                    </button>
                                                    {showPopup && <PopupNotification info={popupInfo} onClose={handleClosePopup} />}
                                                </form>
                                            </>
                                        }
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