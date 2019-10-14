import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocalStorage} from './utils/Input';
import Users from './components/Users'
import './App.css';

function App() {
  const [users, setUsers] = useLocalStorage('data')

   useEffect(() => {
      axios.get(`http://localhost:5000/api/players`)
           .then( response => {
              console.log(response.data);
              setUsers(response.data)
           })
           .catch(error => {
              console.log(error);
           })
   },[]) 
  return (
    <div className="App">
      <h1>Advanced React Sprint Challenge</h1>
      <Users users={users}/>
    </div>
  );
}

export default App;
