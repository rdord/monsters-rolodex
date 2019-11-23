import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setMonsters(data);
    }
    fetchData();
  }, []);


  return (
    <div className="App" >
      <CardList monsters={monsters}/>
    </div>
  );
}

export default App;
