import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("render");
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => setIsClicked(!isClicked)}
      >
        Click Me!
      </button>
      <br />
      <br />
      {isClicked && <MagicComponent />}
    </div>
  );
};

const MagicComponent = () => {
  useEffect(() => {
    console.log(`congrats!! you've discovered the magic component`);
    const intId = setInterval(() => console.log("hello from interval"), 1000);
    return () => {
      clearInterval(intId);
      console.log("cleanup");
    };
  }, []);

  return <h2>This is a magic component</h2>;
};

export default CleanupFunction;
