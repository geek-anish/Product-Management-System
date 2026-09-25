import React, { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);
  useEffect(() => {
    console.log("i am use effect");
  }, [count1, count2]);

  console.log("i am component");
  return (
    <div>
      <p>count1 is {count1}</p>
      <p>count2 is {count2}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Incremwnt count1
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Incremwnt count2
      </button>
    </div>
  );
};

export default LearnUseEffect1;
/* 
useeffect will run once dom is printed on browser

useeffect(fun,[])
   this kind of useeffect will run only in first render

useEffect(fun,[dep1])
    this kind of useeffect will run  in first render
    from 2nd render it depends on dep1

useEffect(fun,[dep1,dep2])
    this kind of useeffect will run  in first render
    from 2nd render it depends on dep1 or dep2 (if one of the dependency changes useEffect will run)

useEffect(fun,)
    this kind of useEffect will run in every render
    try to avoid this kind of useEffect
*/
