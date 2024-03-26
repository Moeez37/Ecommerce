import { createSlice } from "@reduxjs/toolkit";
const initialState = {
}
const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const { id, quantity } = action.payload;
            console.log(id, quantity, "additem")
            if (!state[id]) {
                state[id] = {
                    itemQuantity: quantity || 0,
                };
            } else {

                state[id].itemQuantity += quantity || 0;
            }

            console.log(JSON.stringify(state));
        },
        removeItemFromCart(state, action) {
            const { id, quantity } = action.payload;
            if (state.hasOwnProperty(id)) {
                console.log("inside if statement")
                delete state[id];
            }

        },
        removeItemQuantity(state, action) {
            console.log("this.removeItemFromCart");

            const { id, quantity } = action.payload;
            console.log(id, quantity, "removeItem")
            if (state.hasOwnProperty(id)) {
                if (state[id].itemQuantity == 1) {
                    state = delete state[id];
                }
                else {
                    state[id].itemQuantity -= 1
                }
            }
            console.log(state[id]);

        }

    }

});
export default cartSlice;
export const cartActions = cartSlice.actions;