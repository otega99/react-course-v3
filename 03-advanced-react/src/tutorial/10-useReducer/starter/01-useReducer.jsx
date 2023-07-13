import reducer from "./reducer";
import { data } from "../../../data";
import React, { useState, useReducer } from "react";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    setPeople(newPeople);
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() =>
                dispatch({ type: REMOVE_ITEM, payload: { id: id } })
              }
            >
              remove
            </button>
          </div>
        );
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: CLEAR_LIST })}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: RESET_LIST })}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
