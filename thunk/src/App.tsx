import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import logo from './logo.svg';
import Card from './view/components/Card';
import './view/style/global.scss';


function App() {
  useEffect(()=>{
    // console.log(jokesState);
  },[]);
  const jokes = useSelector((state: RootState) => state.joke.value) // all our state be in the "jokes"
  return (
    <div className="container">
      {jokes.map((joke)=>{
        return <Card joke = {joke}/>
      })}
    </div>
  );
}

export default App;
