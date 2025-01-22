import React from "react";

const RecomCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  const viewCount = statistics?.viewCount || 0;

  const formattedViewCount = viewCount >= 1_000_000
    ? (viewCount / 1_000_000).toFixed(1) + "M"
    : viewCount >= 1_000
    ? (viewCount / 1_000).toFixed(1) + "K"
    : viewCount;

 
  const thumbnailUrl = thumbnails?.medium?.url || "/default-thumbnail.jpg"; // Use your default thumbnail path

  return (
    <div className="py-2 sm:py-2 md:w-[580px] lg:w-[450px] xl:w-[500px]  shadow-lg rounded-lg bg-black box-border">
      <img
        className="rounded-lg w-52 h-48 "
        alt={`Thumbnail for video: ${title || "Untitled Video"}`}
        src={thumbnailUrl}
      />
      <ul className="mt-4 text-white">
        <li className="font-bold text-sm sm:text-base">{title || "Untitled Video"}</li>
        <li className="text-xs sm:text-sm text-gray-400">{channelTitle || "Unknown Channel"}</li>
        <li className="text-xs sm:text-sm text-gray-500">{formattedViewCount} views</li>
      </ul>
    </div>
  );
};



RecomCard.defaultProps = {
  info: {
    snippet: {
      channelTitle: "Unknown Channel",
      title: "Untitled Video",
      thumbnails: { medium: { url: "/default-thumbnail.jpg" } },
    },
    statistics: { viewCount: 0 },
  },
};

export default RecomCard;
