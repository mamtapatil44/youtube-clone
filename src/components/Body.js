
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import React, { useState } from 'react';


const Body = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex lg:flex-row w-full h-screen">
      <div
        className={`lg:block fixed top-0 left-0 w-3/4 sm:w-60 md:w-72 lg:w-80 h-screen bg-black z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <Sidebar />
      </div>

      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-white"
        onClick={toggleSidebar}
      >
        ☰ 
      </button>

      <div
        className={`flex-1 w-full mx-6 sm:mx-6 md:mx-12 lg:mx-16 mt-4 lg:mt-0 transition-all duration-300 ${
          isSidebarOpen ? "ml-3/4" : "ml-0" 
        }`}
      >
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Body;




