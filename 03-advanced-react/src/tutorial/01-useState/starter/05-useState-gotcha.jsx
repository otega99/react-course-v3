import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button");
      setCount((currentCount)=>{
        return currentCount+1
      });
    }, 3000);
  };

  return (
    <div>
      <h4>You've clicked me {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default UseStateGotcha;
