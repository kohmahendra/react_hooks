import React, { createContext, useState,useContext } from "react";

//Technically, all this components will be there in seperate files, but here we are storing in one file.
// We should import GlobalStateContext in each component
export const GlobalStateContext = createContext();

const UseContextExample = () => {
  
  const [toggle, setToggle] = useState(false);
  return (
    <GlobalStateContext.Provider value={{toggle,setToggle}}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle/>
        <ChildDisplay/>
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
    const {setToggle}=useContext(GlobalStateContext)
    return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setToggle((prev) => !prev)}
      >
        Toggle State
      </button>
    </div>
  );
};

const ChildDisplay = () => {
    const {toggle}=useContext(GlobalStateContext)
  return <div>Current State is {toggle ? "ON" : "OFF"}</div>;
};

export default UseContextExample;
 