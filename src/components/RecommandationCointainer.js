import React, { useEffect, useState } from "react";

import RecomCard from "./RecomCard";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";


const RecommandationContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("json=",json.items)
    setVideos(json.items);
  };

  return (
    <div className="hidden lg:block lg:w-1/4 pl-4"> 
     <h5 className="text-l text-center mb-4 mt-2">Recommendations</h5>
      <div className="grid grid-cols-2 gap-4">
        {videos.map((video ,index) => (
          <Link key={index} to={`/watch?v=${video.id.videoId}`}>
            <RecomCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommandationContainer;