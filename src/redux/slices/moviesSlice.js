import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    MovieTrailer: null,
    PopularMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload
    }
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;


// Steps 
// 1. createSlice
// 2. make reducer funtion
// 3. export it inside movieSlice.action