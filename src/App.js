import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const monsters = [
    {
      name: "Frank"
    },
    {
      name: "Linda"
    },
    {
      name: "Jackie"
    },
    {
      name: "Andrei"
    }
  ]

  return (
    <div className="App">
      {
        monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>
        })
      }
    </div>
  );
}

export default App;
