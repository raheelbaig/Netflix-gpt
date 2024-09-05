  import React from "react";
  import { FaPlay } from "react-icons/fa";
  import { IoIosInformationCircleOutline } from "react-icons/io";


  const VideoTitle = ({ title, overview }) => {
    return (
      <div className="h-screen aspect-video pt-60 px-14 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold pb-12">{title}</h1>
        <p className="w-1/3 text-lg font-medium">{overview}</p>

        <div className="flex items-center mt-8 gap-x-4">
          <button className="flex items-center gap-x-2 bg-white hover:bg-gray-300 px-8 py-2.5 text-lg text-black font-semibold rounded-lg"><FaPlay /> Play</button>
          <button className="flex items-center gap-x-2 bg-gray-500 hover:bg-gray-600 px-8 py-2 text-lg text-white font-bold rounded-lg"><IoIosInformationCircleOutline size={32}/> More Info</button>
        </div>
      </div>
    );
  };

  export default VideoTitle;
