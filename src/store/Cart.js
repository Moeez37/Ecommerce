import { createSlice } from "@reduxjs/toolkit";
const initialState = {
}
const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const { id, price, quantity } = action.payload;
            if (!state[id]) {
                state[id] = {
                    itemQuantity: quantity || 0,
                    itemPrice: price
                };
            } else {
                state[id].itemQuantity += quantity || 0;
                state[id].itemPrice = price;
            }

            console.log(JSON.stringify(state));
        },
        removeItemFromCart(state, action) {
            const id = action.payload[id];
            if (state.hasOwnProperty(id)) {
                delete state[id];
            }
        },
        removeItemQuantity(state, action) {
            const id = action.payload[id];
            if (state.hasOwnProperty(id)) {
                if (state[id].itemQuantity == 1) {
                    state = delete state[id];
                }
                else {
                    state[id].itemQuantity -= 1
                }
            }

        }

    }

});
export default cartSlice;
export const cartActions = cartSlice.actions;