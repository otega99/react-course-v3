import { useState } from "react";

const ShortCircuitOverview = () => {
  const [truthy, setTruthy] = useState("tega");
  const [falsy, setFalsy] = useState("");

  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}
      <h4>Falsy OR: {falsy || "Hello there..."}</h4>
      <h4>Falsy AND: {falsy && "Hello there..."}</h4>
      <h4>Truthy OR: {truthy || "Hello there..."}</h4>
      <h4>Truthy AND: {truthy && "Hello there..."}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
