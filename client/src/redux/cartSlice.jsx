import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
		totalQuantity: 0,
		amount: 0,
		total: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.cart.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity++;
			if (!existingItem) {
				state.cart.push(action.payload);
			}
		},
		clearCart: (state) => {
			state.cart = [];
		},
		removeItemFromCart: (state, action) => {
			const itemId = action.payload;
			console.log(itemId);
			state.cart = state.cart.filter((item) => item.id !== itemId);
		},
		increase: (state, { payload }) => {
			const cartItem = state.cart.find(
				(item) => item.id === payload.cartId
			);
			cartItem.amount = cartItem.amount + 1;
		},
		decrease: (state, { payload }) => {
			const cartItem = state.cart.find(
				(item) => item.id === payload.cartId
			);
			cartItem.amount = cartItem.amount - 1;
		},
		calculateTotal: (state) => {
			let amount = 0;
			let total = 0;
			state.cart.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.amount = amount;
			state.total = total;
		},
	},
});

export default cartSlice.reducer;
export const {
	addToCart,
	updateCart,
	removeItemFromCart,
	increase,
	decrease,
	calculateTotal,
	clearCart,
} = cartSlice.actions;
