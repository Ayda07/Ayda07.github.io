import { React, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import Creatures from "./creatures.js";
import "./App.css"


const App = () => {
  const [creatures, setCreatures] = useState([]);

  const addCreature = useCallback(() => {
    setCreatures((c) => [...c, { init: 10, ac: 10, hp: 0 }])
  }, [creatures]);
  
  return(
    <Creatures creatures={creatures} addCreature={addCreature} />
  )
}

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)