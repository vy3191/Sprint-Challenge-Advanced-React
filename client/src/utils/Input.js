import React, {useState} from 'react';

export function useInput(initialValue) {
   const [value, setValue] = useState(initialValue);
   const customSetter = (newValue) => {
      setValue(newValue);
   }
   return [value, customSetter];
}

export function useLocalStorage(key, initialValue) {
   const [value, setValue] = useInput(() => {
       return JSON.parse(window.localStorage.getItem(key)) || initialValue;
   })
   const customSetter = (newValue) => {
       setValue(newValue);
       window.localStorage.setItem(key, JSON.stringify(newValue));
   }
   return [value, customSetter];
}