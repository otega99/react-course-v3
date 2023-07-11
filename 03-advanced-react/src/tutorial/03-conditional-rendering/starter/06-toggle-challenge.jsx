import { useState } from "react";

const ToggleChallenge = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <h2>Toggle Challenge</h2>
      <button
        type="button"
        className="btn"
        onClick={() => setIsClicked(!isClicked)}
      >
        Click Me
      </button>
      {isClicked && <MagicAlert />}
    </div>
  );
};

const MagicAlert = () => {
  return (
    <div className="alert alert-danger">
      <h2>Boooo!!!!</h2>
    </div>
  );
};
export default ToggleChallenge;
