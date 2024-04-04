import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login:{
            currentUser: null,
            isFetching: false,
            error: false
        },
        register:{
            isFetching: false,
            error: false,
            success: false
        },
        logout: {
            isFetching: false,
            error: false
        },
        sendEmail: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailure: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailure: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false;
            state.logout.currentUser = null;
            state.logout.error = false;
        },
        logoutFailure: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        sendEmailStart: (state) => {
            state.sendEmail.isFetching = true;
        },
        sendEmailSuccess: (state) => {
            state.sendEmail.isFetching = false;
            state.sendEmail.error = false;
            state.sendEmail.success = true;
        },
        sendEmailFailure: (state) => {
            state.sendEmail.isFetching = false;
            state.sendEmail.error = true;
            state.sendEmail.success = false;
        }
    }
});
export const {loginStart, loginSuccess, loginFailure, registerSuccess, registerFailure, registerStart, logoutStart, logoutSuccess, logoutFailure, sendEmailSuccess, sendEmailStart, sendEmailFailure} = authSlice.actions;


export default authSlice.reducer;