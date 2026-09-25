import React, { useState } from "react";
import DwRoutes from "./pages/DwRoutes";
import DwLink from "./pages/DwLink";

const App = () => {
  return (
    <div className="app-shell">
      <DwLink />
      <DwRoutes />
    </div>
  );
};

export default App;

// import React, { useState } from 'react'
// import LearnUseEffect1 from "./component/learnuseeffect/LearnUseEffect1";
// import LearnUseEffect3 from "./component/learnuseeffect/LearnUseEffect3";

// const App = () => {
//   const [show,setShow]= useState(true)

//   return (
//     <div>
//       {show? <LearnUseEffect3></LearnUseEffect3>:null}
//       <button onClick={()=>{setShow(true)}}>show</button>
//       <button onClick={()=>{setShow(false)}}>hide</button>
//     </div>
//   )
// }

// export default App

/* 
component mount
placing component in dom
it is the first render

componenet unmount
removing component from dom
 */