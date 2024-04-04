import axios from 'axios';
import {
    loginFailure,
    loginStart,
    loginSuccess, logoutFailure,
    logoutStart, logoutSuccess,
    registerFailure,
    registerStart,
    registerSuccess, sendEmailFailure, sendEmailStart, sendEmailSuccess,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/signin", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
        console.log("Login success")
    } catch (err) {
        dispatch(loginFailure());
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/logout", user);
        dispatch(registerSuccess(res.data));
        navigate("/sign-in");
        console.log("Register success")
    } catch (err) {
        dispatch(registerFailure());
    }
}
export const logOut = async (dispatch, id, navigate, token) => {
    dispatch(logoutStart());
    try {
        await axios.post("http://localhost:8080/api/auth/logout", id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch(logoutSuccess());
        navigate("/");
        window.location.reload();
        console.log("Logout success")
    } catch (err) {
        dispatch(logoutFailure());
    }
}
export const sendEmail = async (email, dispatch) => {
    dispatch(sendEmailStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/forgot-password", email);
        dispatch(sendEmailSuccess(res.data));
        console.log("Send email success")
    } catch (err) {
        dispatch(sendEmailFailure());
    }
}