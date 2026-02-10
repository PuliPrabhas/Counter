import { useState } from "react";
import "./App.css";
import ClickButton from "./ClickButton";
import Mousehover from "./Mousehover";
import DoubleClick from "./DoubleClick";
import Counter from "./Counter"

function App() {
  return (
    <>
      <ClickButton></ClickButton>
      <Mousehover></Mousehover>
      <DoubleClick></DoubleClick>
      <Counter></Counter>
    </>
  );
}

export default App;
