import { createStore } from "redux";

const initialstore = { islogin: false, user: {} };
const storeReducer = (state = initialstore, action) => {
    switch (action.type) {
        case "login":
            return {
                islogin: true,
                user: state.user,
            };
        case "logout":
            return {
                islogin: false,
                user: "",
            };
        case "setUserDetail":
            return {
                islogin: true,
                user: action.value,
            };
        default:
            return state;

    }

}
const store = createStore(storeReducer);
export default store;