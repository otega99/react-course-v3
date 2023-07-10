import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Oghenetega",
    age: 23,
    hobby: "coding",
  });

  const changePerson = () => {
    // setPerson({ name: "Kevwe", age: 12, hobby: "dancing" });
    setPerson({ ...person, name: "Agetenehgo" });
  };

  return (
    <div>
      <h4>Name: {person.name}</h4>
      <h4>Age: {person.age}</h4>
      <h4>Hobby: {person.hobby}</h4>
      <br />
      <br />
      <button type="button" className="btn" onClick={changePerson}>
        New Person
      </button>
    </div>
  );
};

export default UseStateObject;
