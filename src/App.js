import React, { useRef, useContext, useState } from "react";
import Fruit from "./components/Fruit";
import FruitList from "./components/FruitList";

function App() {
  return (
    <>
      <FruitList />
      <br />
      <Fruit />
    </>
  );
}

export default App;
