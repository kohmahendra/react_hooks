import React,{useState,useRef,forwardRef,useImperativeHandle} from 'react'


const UseImperativeHandleExample= () => {
    const childRef = useRef();
  
    const handleClick = () => {
      childRef.current.increment();
    };
  
    return (
      <>
        <ChildComponent ref={childRef} />
        <button onClick={handleClick}>Parent button controlling child</button>
      </>
    );
  };

export default UseImperativeHandleExample;

const ChildComponent = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
  
    useImperativeHandle(ref, () => ({
      increment() {
        setCount(count + 1);
      },
      getCount() {
        return count;
      }
    }));
  
    return <div>Count on Child: {count}</div>;
  });




  