import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  users: [],
  user: null,
};

const userSlice = createSlice({
  name: "USER",
  initialState: INITIAL_STATE,
  reducers: {
    reqUser: (state, action) => {
      state.loading = true;
    },
    listUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    newUser: (state, action) => {
      // state.users.push(action.payload);
      state.users = [...state.users, action.payload];
    },
    getUserEdit: (state, action) => {
      state.user = action.payload;
    },
    editUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
      state.user = null;
    },
  },
});

export const { reqUser, listUserSuccess, newUser, getUserEdit, editUser } =
  userSlice.actions;

export default userSlice.reducer;
