import { useState, useEffect } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

function App() {

  const [ movie, setMovie ] = useState(null);
  
  const getMovieData = async (title) => {
    
    const response = await fetch("https://www.omdbapi.com/?apikey=98e3fb1f&t=" + title);
    
    const data = await response.json();
    
    setMovie(data);
  };


  useEffect(() => {
    console.log('Component Created or Updated');
    return () => {
      console.log('Component Destroyed So it can be Created or Updated');
    }
  });
  

  useEffect(() => {
      getMovieData('Batman');
  }, []);



  /*
    1) React Component Lifecycle
      
      1) Creation Stage 
        1.1) the component get added to the dom
      2) Update Stage
        2.1) state has been changed the component must be updated (re-rendered)
      3) Destruction Stage
        3.1) This happens whenever a component is removed or needs to be updated 
  
    2) Observer Pattern
  */

  return (
    <div className="App">
      <Form getMovieData={getMovieData} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
