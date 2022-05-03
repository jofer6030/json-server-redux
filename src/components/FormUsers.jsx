import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUser, updateUser } from "../redux/actions/user";

const FormUsers = () => {
  const { user } = useSelector((state) => state.User);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([firstName, lastName, email].includes("")) {
      alert("Todos lo campos son obligatorios");
      return;
    }

    if (user) {
      dispatch(
        updateUser({
          id: user.id,
          first_name: firstName,
          last_name: lastName,
          email,
        })
      );
    } else {
      dispatch(
        createUser({
          first_name: firstName,
          last_name: lastName,
          email,
        })
      );
    }

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  }, [user]);

  return (
    <form className="col-4 mt-4" onSubmit={handleSubmit}>
      <h2 className="text-center text-dark mb-4 text-uppercase">
        {user ? "Edit User" : "Create User"}
      </h2>
      <div className="mb-3">
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUsers;
