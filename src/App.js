import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import GrandBox from './component/GrandBox';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increase = () => {
    dispatch({type : 'INCREMENT'});
    
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>클릭</button>
      <Box />
    </div>
  );
};

export default App;
