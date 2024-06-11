import React from "react";
import {Routes, Route} from "react-router-dom";
import A145 from "./parksehyun/A145";

function App(){
  return (
    <Routes>
      <Route path="/" element={<A145></A145>}></Route>
    </Routes>
  );
};

export default App;