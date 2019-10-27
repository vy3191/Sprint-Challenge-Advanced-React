import  {useState, useEffect } from 'react';
import {useLocalStorage} from './api/Input'
import axios from 'axios';

function getUsers() {
   const [users, setUsers] = useState({});

   useEffect(() => {
      axios.get(`http://localhost:5000/api/players`)
           .then( response => {
              console.log(response);
              useLocalStorage('data', response);

           })
           .catch(error => {
              console.log(error);
           })
   },[])
   return [users, setUsers];
}

export default getUsers;