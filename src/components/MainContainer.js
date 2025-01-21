import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoCointainer'
import Sidebar from './Sidebar';

const MainContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-0 py-4">
      <div className="flex  lg:flex-nowrap lg:w-full mt-4 lg:mt-0">

        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/4 xl:w-4/5 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        <ButtonList />
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;


