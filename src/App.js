import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      setMonsters(users)
    })
  }, [])
  

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
