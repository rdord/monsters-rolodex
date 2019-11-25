import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component';

function App() {
  const monsters = useFetch('https://jsonplaceholder.typicode.com/users');
  const search = useInputValue();
  
  useEffect(() => console.log(search))

  return (
    <div className="App" >
      <SearchBox placeholder="Search monster" {...search} />
      <CardList monsters={monsters} />
    </div>
  );
}

function useInputValue() {
  const [value, setValue] = useState('');

  function handleInput(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleInput
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
