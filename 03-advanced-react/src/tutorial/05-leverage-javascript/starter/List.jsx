import React from "react";
import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h2>The Gang </h2>
      {people.map((person, id) => {
        console.log(person);
        return <Person key={id} {...person} />;
      })}
    </div>
  );
};

export default List;
