import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
		},
		updateCart: (state, action) => {
			const { id, ammount, total } = action.payload;
			const cart = state.cart.find((cartItm) => cartItm.id == id);
			if (cart) {
				cart.ammount = ammount;
				cart.total = total;
			}
		},
	},
});

export default cartSlice.reducer;
export const { addToCart, updateCart } = cartSlice.actions;
