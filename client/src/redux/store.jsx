import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		user: userReducer,
	},
});
export default store;
