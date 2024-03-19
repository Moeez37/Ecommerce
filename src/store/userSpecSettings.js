import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {}
export const userSettings = createSlice({
    name: "userSettings",
    initialState,
    reducers: {
        setSetting(state, action) {
            state = { ...state, ...action.payload };
        }
    }
})
export default userSettings.actions;
