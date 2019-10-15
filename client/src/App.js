import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocalStorage} from './utils/Input';
import Users from './components/Users'
import './App.css';

function App() {
  const [users, setUsers] = useLocalStorage('data', {});
  const url = 'http://localhost:5000/api/players';

   useEffect(() => {
      const abortController = new AbortController(); 
      fetch(url, { signal: abortController.signal})
           .then ( response => response.JSON())
           .then( response => {              
              setUsers(response.data)
           })
           .catch(error => {
              
           })

           return () => {
            abortController.abort();
          };

   },[url]);

  return (
    <div className="App">
      <h1>Advanced React Sprint Challenge</h1>
      <Users users={users}/>
    </div>
  );
}

export default App;
