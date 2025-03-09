import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Only recreate handleClick when count changes
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;

const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>Increment</button>;
};
