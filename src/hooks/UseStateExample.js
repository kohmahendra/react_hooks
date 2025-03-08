import React, { useState } from "react";

const UseStateExample = () => {
  
  //using vanila javascript, the dom value of cnt wont update on UI
  let cnt = 0;
  const incrementCnt = () => {
    cnt = cnt + 1;
    console.log(`cnt ${cnt}`);
  };

  // using useState,  the dom value of count  update on UI
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previous) => previous + 1);
    console.log(`count ${count}`);
  };

  return (
    <div>
      <h1>{cnt}</h1>
      <button className="btn btn-primary" onClick={incrementCnt}>
        Increment Using vanila Javascript
      </button>

      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={increment}>
        Increment Using React State
      </button>
    </div>
  );
};

export default UseStateExample;
