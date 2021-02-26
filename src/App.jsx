import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1> Hello, React! </h1>
      <h2 className="font-bold text-red-500">Is tailwind working?</h2>
      <p className="text-4xl">I guess it's working</p>
    </div>
  );
};

export default hot(module)(App);
