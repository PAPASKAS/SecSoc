import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import errorReducer from "./reducers/errorSlice";


const rootReducer = combineReducers({
    userReducer,
    errorReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];