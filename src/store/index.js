import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { user: {} };
const reduxSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        userInfo(state, action) {
            state.user = action.payload;
        }
    }
})

const store = configureStore({
    reducer: { userInfo: reduxSlice.reducer }
})