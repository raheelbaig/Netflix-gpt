import React from "react";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import Header from "../component/Header";
import MainContainer from "../component/browsePageComponents/MainContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  usePlayingNowMovies();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
