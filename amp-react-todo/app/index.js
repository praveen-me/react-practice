import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./config";

const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener("click", () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    root
  );
  btn.style.display = "none";
});
