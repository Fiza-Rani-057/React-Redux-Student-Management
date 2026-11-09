import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Std.js";

export const store = configureStore({
    reducer: {
        students: studentReducer
    }
});