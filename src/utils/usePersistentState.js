import {useState} from 'react';

const usePersistentState = (persistentName, initialState) => {
  const [state, setCurrentState] = useState(JSON.parse(localStorage.getItem(persistentName)) || initialState);
  
  const setState = (newState) => {
    setCurrentState(newState);
    localStorage.setItem(persistentName, JSON.stringify(newState));
  };

  return [state, setState];
};

export default usePersistentState;