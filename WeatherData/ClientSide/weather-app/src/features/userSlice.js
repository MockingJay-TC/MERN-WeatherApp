import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/authService";

let auth = new AuthService();
export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password =  action.payload
    },
    login: (state, action) => {
      auth
        .login(action.payload)
        .then((response) => console.log(response))
        .catch((e) => console.log(e));
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout, setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
