import axios from 'axios';
import {
    logoutFailure,
    logoutStart, logoutSuccess,
} from "./authSlice";

export const loginUser = async (username, password) => {
    const url = `${process.env.REACT_APP_ENDPOINT_API}/auth/signin`;
    const requestBody = {
        username: username,
        password: password
    };
    try {
        return await axios.post(url, requestBody);
    } catch (err) {
        console.error("Error during loginUser:", err);
        throw err;
    }
}
export const registerUser = async (username,password,email,otp) => {
    const url= `${process.env.REACT_APP_ENDPOINT_API}/auth/signup`;
    const newUser = {
        username: username,
        password: password,
        email: email,
        otp: otp,
        role: ["USER"]
    };
    try {
        return await axios.post(url, newUser);
    } catch (error) {
        console.error("Error during signUp:", error);
    }
}
export const logOut = async (dispatch, id, navigate, token) => {
    dispatch(logoutStart());
    try {
        await axios.post(`${process.env.REACT_APP_ENDPOINT_API}/auth/logout`, id, {
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
export const listCart = async (token) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_API}/cart/items`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log("Load success:", response.data);
        return response.data;
    } catch (err) {
        console.error("Error fetching cart:", err);
        throw err;
    }
}
export const sendEmail = async (props:any) => {
    const url = `${process.env.REACT_APP_ENDPOINT_API}/auth/send-email`;
    try {
        return await axios.post(url, {
            email: props.email,
            type: props.type
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}
export const changeForgotPass = async (props:any) => {
    const url = `${process.env.REACT_APP_ENDPOINT_API}/auth/reset-password`;
    try {
        return await axios.post(url, {
            email: props.email,
            otp: props.otp,
            newPassword: props.newPassword
        });
    } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
    }
}