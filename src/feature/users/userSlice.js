import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "invitado",
  password: "",
  admin: false,
};

export const userSlice = createSlice({
  name: "user",
  //estado incial
  initialState: initialState,
  reducers: {
    loginn: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return {
        username: "invitado",
        password: "",
        admin: false,
      };
    },
  },
});

export const { loginn, logout } = userSlice.actions;

//exportamos los reducers
export default userSlice.reducer;
