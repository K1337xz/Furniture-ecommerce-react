import { createSlice } from "@reduxjs/toolkit";

const itm =
	localStorage.getItem("cartItem") !== null
		? JSON.parse(localStorage.getItem("cartItem"))
		: [];

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: itm,
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

			localStorage.setItem("cartItem", JSON.stringify(state.cart));
		},
		clearCart: (state) => {
			state.cart = [];
			localStorage.setItem("cartItem", []);
		},
		removeItemFromCart: (state, action) => {
			const copyOfCart = [...itm];
			const itemId = action.payload;
			for (let i = 0; i < copyOfCart.length; i++) {
				if (itemId === copyOfCart[i].id) {
					copyOfCart.splice(i, 1);
				}
				localStorage.setItem("cartItem", JSON.stringify(copyOfCart));
				state.cart = state.cart.filter((item) => item.id !== itemId);
			}
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
