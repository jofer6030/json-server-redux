import React from "react";

const User = ({ user }) => {
  return (
    <div className="col-4">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text">First Name: {user.first_name}</p>
          <p className="card-text">Last Name: {user.last_name}</p>
          <p className="card-text">Email: {user.email}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning me-4">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default User;
