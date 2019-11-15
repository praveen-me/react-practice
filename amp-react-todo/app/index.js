import {h, render} from 'preact'
import App from "./App";

const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener("click", () => {
  render(
    <App />,
    root
  );
  btn.style.display = "none";
});
