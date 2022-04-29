import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  users: [],
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
  },
});

export const { reqUser, listUserSuccess } = userSlice.actions;

export default userSlice.reducer;
