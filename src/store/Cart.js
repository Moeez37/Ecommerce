import { createSlice } from "@reduxjs/toolkit";
const initialState = {
}
const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {

            if (state.hasProperty(`${action.id}`)) {

            }
        }
    }

})