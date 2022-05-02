import { reqUser, listUserSuccess, newUser, editUser } from "../reducers/user";

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

export const createUser = (user) => async (dispatch) => {
  try {
    await fetch("http://localhost:4000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    dispatch(newUser(user));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    await fetch(`http://localhost:4000/profile/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    dispatch(editUser(user));
  } catch (error) {
    console.log(error);
  }
};
