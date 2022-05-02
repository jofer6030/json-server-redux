import { useDispatch } from "react-redux";
import { getUserEdit } from "../redux/reducers/user";

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(getUserEdit(user));
  };
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text">First Name: {user.first_name}</p>
          <p className="card-text">Last Name: {user.last_name}</p>
          <p className="card-text">Email: {user.email}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning me-4" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default User;
