import './App.css';
import Screen from './components/Screen';
import { useCallback, useEffect, useState } from 'react';

const stages = [
  (id: 1, name: "start"),
  (id: 2, name: "game"),
  (id: 3, name: "end");
];

function App() {
  const = [gameStage, setGameStage]= useState(stages[0].name);
  return (
    <div className="">
      <header className="">
        {gameStage === 'start' && <Screen />}
        {gameStage === 'game' && <Screen />}
        {gameStage === 'end' && <Screen />}
      </header>
    </div>
  );
}

export default App;
