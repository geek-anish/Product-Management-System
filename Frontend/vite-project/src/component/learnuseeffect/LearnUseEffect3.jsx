import React, { useEffect } from "react";

const LearnUseEffect3 = () => {
  let interval = setInterval(() => {
    console.log("i will execute eveery 1 sec");
  }, 1000);
  useEffect(() => {
    console.log("i am useeffect");
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>LearnUseEffect3</div>;
};

export default LearnUseEffect3;
/*
cleanup func
  cleanup func does not execute on componeent mount
 */
