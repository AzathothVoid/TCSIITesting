import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    token: Cookies.get("loginToken") || null, 
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, loginToken } = action.payload;
            state.token = loginToken;
            state.user = user;
            Cookies.set("loginToken", loginToken, { expires: 7 })
            Cookies.set("userRole", user.role, { expires: 7 })
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            Cookies.remove("loginToken")
            Cookies.remove("userRole") 
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.authSlice.user;
export const selectCurrentToken = (state) => state.authSlice.token;
