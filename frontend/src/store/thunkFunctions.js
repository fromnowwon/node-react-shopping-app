import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

// registerUser 비동기 액션 생성
export const registerUser = createAsyncThunk(
	// 액션 타입 문자열
	"user/registerUser",
	// 비동기 작업 수행 함수
	async (body, thunkAPI) => {
		try {
			// 서버에 POST 요청을 보내고, 사용자 정보(body)를 함께 전송
			const response = await axiosInstance.post(`/users/register`, body);
			// 요청이 성공하면 서버에서 받은 응답 데이터를 반환
			return response.data;
		} catch (error) {
			// 요청이 실패하면 콘솔에 오류를 출력
			console.error(error);
			// 오류 응답 데이터 반환
			return thunkAPI.rejectWithValue(error.response.data || error.message);
		}
	}
);

// 로그인 비동기 액션 생성
export const loginUser = createAsyncThunk(
	// 액션 타입 문자열
	"user/loginUser",
	// 비동기 작업 수행 함수
	async (body, thunkAPI) => {
		try {
			// 서버에 POST 요청을 보내고, 사용자 정보(body)를 함께 전송
			const response = await axiosInstance.post(`/users/login`, body);
			// 요청이 성공하면 서버에서 받은 응답 데이터를 반환
			return response.data;
		} catch (error) {
			// 요청이 실패하면 콘솔에 오류를 출력
			console.error(error);
			// 오류 응답 데이터 반환
			return thunkAPI.rejectWithValue(error.response.data || error.message);
		}
	}
);
