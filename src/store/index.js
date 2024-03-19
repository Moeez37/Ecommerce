import { createSlice, configureStore } from "@reduxjs/toolkit";

import { userSettings } from "./userSpecSettings";

const initialState = { user: {}, islogin: false };
const userAuth = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.user = action.payload;
            state.islogin = true;
        },
        logOutUser(state) {
            state.islogin = false;
        }

    }
})

const store = configureStore({
    reducer: { Auth: userAuth.reducer, userSettings: userSettings.reducer }
})
export default store;
export const userAuthInfo = userAuth.actions;