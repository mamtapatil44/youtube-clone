import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu(true));
  }, []);
  return (
    <div className="flex w-full">
      <div className="w-3/4">
      <iframe
        className="w-full mr-16 my-5 pr-2"
        height="415"
        src={"https://www.youtube.com/embed/"+ id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
     
      <div className="w-1/4">Recommendeations</div>
    </div>
  );
};

export default WatchPage;
