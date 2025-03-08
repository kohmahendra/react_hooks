import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const UseReducerExample = () => {
  const myReducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "multiply":
        return { count: state.count * 2 };
      case "square":
        return { count: state.count * state.count };
      default:
        return { count: 1 };
    }
  };

  // useReducer is similar to useState, but if we wan to handle complex logic
  const [state, dispatch] = useReducer(myReducerFunction, { count: 0 });
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: "increment" })}>Increment By 1</button>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: "multiply" })}>Multiply By 2</button>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: "square" })}>Square</button>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </div>
  );
};

export default UseReducerExample;
