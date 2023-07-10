import { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState(1));
  // const value = useState("tega")[0];
  // const func = useState("tega")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
