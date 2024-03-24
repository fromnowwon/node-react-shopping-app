import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
	userData: {
		id: "",
		email: "",
		name: "",
		role: 0,
		image: "",
	},
	isAuth: false,
	isLoading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	// extraReducers를 사용하여 비동기 액션에 대한 리듀서를 정의
	extraReducers: (builder) => {
		builder
			// registerUser 액션이 pending 상태일 때
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			// registerUser 액션이 fulfilled 상태일 때
			.addCase(registerUser.fulfilled, (state) => {
				state.isLoading = false;
				toast.info("회원가입 성공!");
			})
			// registerUser 액션이 rejected 상태일 때
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload; // 에러를 상태에 저장
				toast.error(action.payload);
			})

			// loginUser 액션이 pending 상태일 때
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			// loginUser 액션이 fulfilled 상태일 때
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload;
				state.isAuth = true;
				localStorage.setItem("accessToken", action.payload.accessToken);
			})
			// loginUser 액션이 rejected 상태일 때
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload; // 에러를 상태에 저장
				toast.error(action.payload);
			})

			// logoutUser 액션이 pending 상태일 때
			.addCase(logoutUser.pending, (state) => {
				state.isLoading = true;
			})
			// logoutUser 액션이 fulfilled 상태일 때
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = initialState.userData;
				state.isAuth = false;
				localStorage.removeItem("accessToken", action.payload.accessToken);
			})
			// logoutUser 액션이 rejected 상태일 때
			.addCase(logoutUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload; // 에러를 상태에 저장
				toast.error(action.payload);
			});
	},
});

export default userSlice.reducer;
