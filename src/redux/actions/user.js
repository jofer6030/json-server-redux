import { reqUser, listUserSuccess } from "../reducers/user";

export const listUsers = () => async (dispatch) => {
  dispatch(reqUser());
  try {
    const res = await fetch("http://localhost:4000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch(listUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
