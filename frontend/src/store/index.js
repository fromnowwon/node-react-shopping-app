import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
	FLUSH,
	PAUSE,
	REGISTER,
	REHYDRATE,
	persistReducer,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const rootReducer = combineReducers({
	user: userReducer,
});

const persistConfig = {
	key: "root",
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER],
			},
		}), // redux persist 사용 시 직렬화되지 않은 함수가 포함되므로 에러가 나기 때문에 에러 방지하기 위해 설정
});

export const persistor = persistStore(store);
