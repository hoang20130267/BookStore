import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {registerUser} from "../../../store/apiRequest";
import {useDispatch} from "react-redux";
import {registerSuccess} from "../../../store/authSlice";

const SignUp = () => {
    const location = useLocation();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMessage("");
        setShowErrorMessage(false);
        if (password !== repeatPassword) {
            setErrorMessage("Mật khẩu và mật khẩu lặp lại không trùng khớp.");
            setShowErrorMessage(true);
            return;
        }
        try {
            const response = registerUser(username, password, email);
                dispatch(registerSuccess(response.data));
                navigate("/sign-in");
        } catch (error) {
            setErrorMessage("Email hoặc tên tài khoản đã tồn tại!");
            setShowErrorMessage(true);
        }
    }
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
                                        <form onSubmit={handleRegister}>
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
                                                    }}> Đăng ký
                                            </button>
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