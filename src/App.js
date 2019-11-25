import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';

function App() {
  const monsters = useFetch('https://jsonplaceholder.typicode.com/users');
  const search = useInputValue();

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(search.value.toLowerCase())
  );

  return (
    <div className="App" >
      <h1 className="App-heading">Monster Rolodex</h1>
      <SearchBox placeholder="Search monster" {...search} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}


function useInputValue() {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [url]);

  return data;
}

export default App;
