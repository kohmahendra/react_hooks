/* 
//Example 1

import React, { useRef } from 'react';

const UseRefExample =()=> {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text"  ref={inputRef} />
      <button className="btn btn-primary mx-2" onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;
*/

/*
import React, { useEffect, useRef } from 'react'
import Video from "../assets/video.mp4";
const UseRefExample = () => {
  const videoRef = useRef(null);

  const stop =()=>{
    videoRef.current?.setState({ muted: true})
  };

  useEffect(() => {
    // Automatically play the video when the component mounts
    videoRef.current.play();
  }, []);

  return (
    <div>
        <button className="btn btn-primary" onClick={stop}>Stop</button>
      <video ref={videoRef} controls autostart autoPlay src={Video} type="video/mp4" muted="muted" autoplay="true"/>
    </div>
  );
};
export default UseRefExample;
*/

/*//click Tab button and see
import React, { useRef } from 'react';

const UseRefExample = () => {
    // Create a ref to hold a reference to the input element
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    // Function to focus on the input field
    const focusInput = (e) => {
        // Focus on the input field when the button is clicked
        console.log(e.target.name);
        if(e.target.name==='firstName'){
            console.log(e.target.name);
            lastNameRef.current.focus();
        }else if(e.target.name==='lastName'){
            console.log(e.target.name);
            emailRef.current.focus();
        }else if(e.target.name==='email'){
            console.log(e.target.name);
            phoneRef.current.focus();
        }
    };

    return (
        <div>
            <table>
                <tr>
                    <td><input type="text" name="firstName" onBlur={focusInput} ref={firstNameRef} className='mx-2' placeholder='FirstName' /></td>
                    <td><input type="text" name="email" onBlur={focusInput} ref={emailRef}  className='mx-2' placeholder='Email'/></td>
                </tr>
                <tr>
                    <td><input type="text" name="lastName" onBlur={focusInput} ref={lastNameRef}  className='mx-2' placeholder='LastName'/></td>
                    <td><input type="text" name="phone" onBlur={focusInput} ref={phoneRef}  className='mx-2' placeholder='Phone'/></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button onClick={()=>{console.log('submitting')}} className="btn btn-primary mx-2">Submit</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default UseRefExample;
*/

/*
import React, { useRef,useState, useEffect } from 'react';

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
  
    useEffect(() => {
      renderCount.current++;
    });
  
    return (
      <div>
        <p>Count: {count}</p>
        <p>This component has re-rendered {renderCount.current} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  } 

  export default UseRefExample;

*/

import React, { useEffect, useRef, useState } from 'react'
const UseRefExample = () => {
      const [count, setCount] = useState(0);
      const previousCount = useRef(0);
      useEffect(()=>{
        previousCount.current=count;
      },[count]);
     
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Previous Count {previousCount.current}</h1>
      <button className="btn btn-primary" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}
export default UseRefExample;