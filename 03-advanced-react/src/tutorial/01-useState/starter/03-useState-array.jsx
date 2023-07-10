import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePeople = () => {
    setPeople([]);
  };

  const removePerson = (id) => {
    // console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
  };

  console.log(people);
  return (
    <div>
      <h4>People</h4>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <br />
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removePerson(id)}
            >
              Remove Person
            </button>
          </div>
        );
      })}
      <br />
      <br />
      <button type="button" className="btn" onClick={removePeople}>
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;
