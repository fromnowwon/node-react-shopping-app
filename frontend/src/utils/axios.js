import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.PROD ? "" : "http://localhost:4000",
});

// 요청 보내기 전에 동작
axiosInstance.interceptors.request.use(
	function (config) {
		config.headers.Authorization =
			"Bearer " + localStorage.getItem("accessToken");
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// 응답 전에 동작
axiosInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		// 토큰 만료된 경우
		if (error.response.data === "jwt expired") {
			window.location.reload();
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
