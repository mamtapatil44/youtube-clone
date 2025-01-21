import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="py-2 sm:py-2 w-[90%] sm:w-72 md:w-56 lg:w-60 xl:w-72 h-auto shadow-lg rounded-lg bg-black box-border">
      <img
        className="rounded-lg w-[98%] md:w-full lg:w-full h-48 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />

      <ul className="mt-4 text-white">
        <li className="font-bold text-sm sm:text-base">{title}</li>
        <li className="text-xs sm:text-sm text-gray-400">{channelTitle}</li>
        <li className="text-xs sm:text-sm text-gray-500">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;