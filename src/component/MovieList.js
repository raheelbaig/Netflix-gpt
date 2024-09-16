import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-20 py-8 bg-transparent">
        <h1 className="text-3xl font-semibold mb-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scroll p-2">
          <div className="flex gap-x-4 ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
