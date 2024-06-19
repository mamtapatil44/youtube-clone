import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoCointainer'

const MainContainer = () => {
   
  return (
    <div>
    <ButtonList/>
    <VideoContainer className="mx-12"/>
    </div>
  )
}

export default MainContainer