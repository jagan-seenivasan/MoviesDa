import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
//api-10402302
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=10402302';


const App = () => {

  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
     setMovies(data.Search);
  } 

  useEffect(()=>{
      searchMovies('Iron man');
  },[])

  return (
    <div className="app">
      <h1>MoviesDa</h1>
       <div className="search">
          <input placeholder="search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ></input>
          <img src={SearchIcon} alt={SearchIcon} onClick={() => searchMovies(searchTerm)} />
       </div> 

         {
           movies?.length>0
           ?(
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
           </div>
           ):
           (
             <div className="empty">
                <h3>No Movies found</h3>
             </div>
           )
         } 

         <div className="empty">
           This project created under 'React' with ♥ of Jagan.S
         </div>

       
     </div>  
  );
}

export default App;
