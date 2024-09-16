import React from "react";
import GptSearch from "../component/GptSearchPageComp/GptSearch";
import GptMovieSuggestion from "../component/GptSearchPageComp/GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute ">
        <img
          className="w-screen h-screen "
          src={BG_URL}
          alt="background-image"
        />
      </div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
