import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/users/userSlice";

//estado
export const store = configureStore({
  reducer: { users: userReducer },
});
