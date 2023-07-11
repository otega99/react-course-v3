import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const Login = () => setUser({ name: "Tega" });
  const Logout = () => setUser(null);

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button type="button" className="btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button type="button" className="btn" onClick={Login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
