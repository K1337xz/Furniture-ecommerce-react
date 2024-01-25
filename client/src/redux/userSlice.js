import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (userCredentials) => {
		const request = await axios.post(
			`${import.meta.env.VITE_API_URL}/api/auth/local`,
			userCredentials
		);
		const res = await request.data.user;

		localStorage.setItem("user", JSON.stringify(res));
		return res;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: {
		loading: false,
		user: null,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.user = null;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.user = null;
				console.log(action.error.message);
				if (
					action.error.message ===
					"Request failed with status code 401"
				) {
					state.error = "Access Denied! invalid credentials!";
				} else {
					state.error = action.error.message;
				}
				state.error = null;
			});
	},
});

export default userSlice.reducer;
