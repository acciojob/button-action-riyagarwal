import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(true)
  };

  return (
    <div id="main">
      <p id="para">
        {isClicked
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : ""}
      </p>
      <button id="click" onClick={handleOnClick}></button>
    </div>
  );
}

export default App;
