import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies);
  const popularMovies = useSelector((store) => store.movies?.PopularMovies)
  // console.log("Popular Movies...", popularMovies.PopularMovies);
  return (
    nowPlayingMovies && popularMovies && (
      <div className="-mt-[18rem] relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies.nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Up Coming" movies={nowPlayingMovies.nowPlayingMovies} />
        <MovieList title="Horror" movies={popularMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
