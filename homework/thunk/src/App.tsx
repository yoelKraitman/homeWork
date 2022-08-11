import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import Card from './view/components/Card';
import './view/style/global.scss';
import axios from 'axios';
import { getJokeAsync } from './features/jokeApi';
import { Status } from './features/jokeSlice';
import Spinner from './view/components/Spinner';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  // without a thunk  
  // const handleAddJoke = async() => { 
  //   try {
  //     const {data} = await axios.get("https://api.chucknorris.io/jokes/random");
  //     const {value} = data;
  //     dispatch(addJoke(value))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleAddJoke = async () => {
    dispatch(getJokeAsync());
  }
  const statusJoke = useSelector((state: RootState) => state.joke.status);
  const jokes = useSelector((state: RootState) => state.joke.value); // all our state be in the "jokes"
  return (
    <div>
      <div className="container">

        <div className='spinner'>
          {statusJoke === Status.LOADING ? <Spinner /> : null}
        </div>
        {jokes.map((joke) => {
          return <Card joke={joke} />
        })}

        <button onClick={handleAddJoke}>replace a joke</button>
      </div>

    </div>
  );
}

export default App;
