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
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default ListUsers;
