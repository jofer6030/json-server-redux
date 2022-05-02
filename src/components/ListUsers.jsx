import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../redux/actions/user";
import User from "./User";

const ListUsers = () => {
  const { loading, users } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, []);
  return (
    <div className="col-8 row gy-4">
      {loading ? (
        <h1>Loading...</h1>
      ) : users.length ? (
        users.map((user) => <User key={user.email} user={user} />)
      ) : (
        <h1>No users</h1>
      )}
    </div>
  );
};

export default ListUsers;
