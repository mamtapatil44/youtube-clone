import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaVideo, FaRegListAlt, FaHistory, FaMusic, FaFilm, FaTv } from 'react-icons/fa'; 


const Sidebar = () => {
  return (
    <div className="sticky top-0 bg-black p-2 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-full overflow-y-auto">
      <ul className="relative top-6 my-4 space-y-3">
        <Link to='/'>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md sm:top-4">
          <FaHome className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Home</span> 
        </li></Link>
       
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaVideo className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Shorts</span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaRegListAlt className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Library</span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaHistory className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">History</span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaMusic className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Music</span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaFilm className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Movies</span>
        </li>
        <li className="flex items-center text-white hover:bg-gray-700 p-2 rounded-md">
          <FaTv className="w-6 h-6 mr-2" />
          <span className="hidden lg:block">Live</span>
        </li>
      </ul>
    </div>
  );
};




export default Sidebar;


