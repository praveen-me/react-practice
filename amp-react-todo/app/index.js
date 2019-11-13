import React from "react";
import ReactDOM from "react-dom";

const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener("click", () => {
  const App = () => {
    return <div>Hello from React</div>;
  };

  ReactDOM.render(<App />, root);
});
