import { useState } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

function App() {

  const [ movie, setMovie ] = useState(null);
  
  const getMovieData = (title) => {
    fetch("https://www.omdbapi.com/?apikey=98e3fb1f&t=" + title)
    .then(response => response.json())
    .then(data => setMovie(data));
  };

  return (
    <div className="App">
      <Form getMovieData={getMovieData} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
