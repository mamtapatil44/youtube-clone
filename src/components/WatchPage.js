import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RecommandationContainer from './RecommandationCointainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu(true));  
  }, [dispatch]);

  if (!id) {
    return <div>Error: Video ID not found!</div>; 
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full lg:w-3/4 h-[calc(100vh-100px)]">
        <iframe
          className="w-full h-full my-5"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full lg:w-1/4 h-[calc(100vh-100px)] overflow-y-auto mt-5 lg:mt-0"> 
        <RecommandationContainer />
      </div>
    </div>
  );
};

export default WatchPage;
