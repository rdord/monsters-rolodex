import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const {loading, data} = useFetch("https://jsonplaceholder.typicode.com/users");


  return (
    <div className="App">
    {
      loading ? <h1>Loading...</h1> :
      data.map(user => <h1 key="user.id">{user.name}</h1>)
    }
    </div>
  );
}

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)
  }

  useEffect(() => fetchData(), []);

  return {loading, data};
};

export default App;
