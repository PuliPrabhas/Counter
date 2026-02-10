import { useState } from "react";
import "./App.css";
import ClickButton from "./ClickButton";
import Mousehover from "./Mousehover";
import DoubleClick from "./DoubleClick";

function App() {
  return (
    <>
      <ClickButton></ClickButton>
      <Mousehover></Mousehover>
      <DoubleClick></DoubleClick>
    </>
  );
}

export default App;
