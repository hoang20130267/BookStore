import React from "react";
import "../../assets/css/style-signin.css"
import {Link, useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import {loginUser} from "../../../store/apiRequest";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../../store/authSlice";
import axios from "axios";

const SignIn = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setShowErrorMessage(false);
        try {
            const response = await loginUser(username, password);
            if (response.status === 200) {
                try{
                    const checkLocked = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/user/${response.data.id}`);
                    if(checkLocked.data.locked){
                        setErrorMessage("Tài khoản của bạn đã bị khóa!");
                        setShowErrorMessage(true);
                    } else {
                        dispatch(loginSuccess(response.data));
                        localStorage.setItem('currentUser', JSON.stringify(response.data));
                        navigate("/");
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        } catch (e) {
            setErrorMessage("Tài khoản hoặc mật khẩu không đúng!");
            setShowErrorMessage(true);
        }
    }
    return (
        <>
            <Breadcrumb/>
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
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group first">
                                                <p> Tên đăng nhập</p>
                                                <input type="text" className="form-control" id="username"
                                                       name="username" required
                                                       onChange={e => setUsername(e.target.value)}/>
                                            </div>
                                            <div className="form-group last mb-4">
                                                <p>Mật khẩu</p>
                                                <input type="password" className="form-control" id="password"
                                                       name="password" required
                                                       onChange={e => setPassword(e.target.value)}/>
                                            </div>

                                            <div className="d-flex mb-5 align-items-center">

                                            <span className="ml-auto"><Link to={"/forgot-password"}
                                                                            className="forgot-pass">Quên mật khẩu</Link></span>
                                            </div>
                                            {showErrorMessage && (
                                                <div className="alert alert-danger" role="alert">
                                                    {errorMessage}
                                                </div>
                                            )}
                                            <button className="button_login justify-content-center d-flex" type={"submit"}
                                                    style={{
                                                        paddingBottom: "13px", border: "none", fontSize: "18px"
                                                        , fontWeight: "bold", maxWidth: '100%'
                                                    }}> Đăng nhập
                                            </button>
                                            <span className="d-block text-center my-4 text-muted"> Đăng nhập với:</span>

                                            <div className="social-login text-center">
                                                <Link to="/not-found" className="facebook">
                                                    <span><i className="fa-brands fa-facebook-f"></i></span>
                                                </Link>
                                                <Link to="/user/account" className="twitter">
                                                    <span><i className="fa-brands fa-twitter"></i></span>
                                                </Link>
                                                <Link to="/user/wishlist" className="google">
                                                    <span> <i className="fa-brands fa-google"></i></span>
                                                </Link>

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
        </>
    );
}
export default SignIn;