import React from "react";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import Header from "../component/Header";
import MainContainer from "../component/browsePageComponents/MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import SecondaryContainer from "../component/SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.toggleInput);
  usePlayingNowMovies();
  usePopularMovies();

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
