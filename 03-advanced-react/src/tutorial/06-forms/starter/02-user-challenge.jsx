import { useEffect, useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const addUser = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUsers = [
      ...users,
      {
        id: users[users.length - 1].id + 1,
        name,
      },
    ];
    setUsers(newUsers);
    setName("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={addUser}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {users.map((user, id) => {
        return (
          <div key={id} style={{ marginBottom: "2em" }}>
            <h4>{user.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => deleteUser(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
