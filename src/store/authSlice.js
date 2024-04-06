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
        },
        changeForgotPass: {
            isFetching: false,
            error: false,
            success: false
        },
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
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
        blogSuccess: (state, action) => {
            state.blog.isFetching = false;
            state.blog.currentBlog = action.payload;
            state.blog.error = false;
        }
    }
});
export const {
    loginSuccess,
    registerSuccess,
    logoutStart,
    logoutSuccess,
    logoutFailure,
    blogSuccess
} = authSlice.actions;


export default authSlice.reducer;