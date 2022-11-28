
import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox'; 

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=94816e01609f476e7c259c0cd70d5395";

function App() {
  const [movies, setMovies]= useState([]);

useEffect(() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then(data => {
    console.log(data)
    setMovies(data.results);
  })
}, [])

  return (
    <div >
      {movies.map((movieReq) => 
      <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
  );
}

export default App;
