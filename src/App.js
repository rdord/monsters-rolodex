import React, {useState} from 'react';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([
    {
      name: 'Buubu',
      id: 'bu1'
    },
    {
      name: 'Baubau',
      id: 'ba1'
    },
    {
      name: 'Grrr',
      id: 'gr1'
    }
  ]);

  return (
    <div className="App">
      {
        monsters.map(monster => <h1 key="monster.id">{monster.name}</h1>)
      }
    </div>
  );
}

export default App;
