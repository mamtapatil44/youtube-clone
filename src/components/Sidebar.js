import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PLAYLIST } from "../utils/constant";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="sticky top-0">
      <ul className="my-4">
        <li className="my-3">Home</li>
        <li className="my-3">Shorts</li>
        <li className="my-3">Subscriptions</li>
      </ul>
      <hr/>
      <ul className="my-4">
        <li className="my-3">Library</li>
        <li className="my-4">History</li>
        <li className="my-3">Subscriptions</li>
      </ul>
      <hr/>
      <ul className="my-4">
        <h1 className="my-3">Explore</h1>
        <li className="my-3"> Trending</li>
        <li className="my-3">Shopping</li>
        <li className="my-3">Music</li>
        <li className="my-3">  Movies</li>
        <li className="my-3">Live</li>
        <li className="my-3">Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
