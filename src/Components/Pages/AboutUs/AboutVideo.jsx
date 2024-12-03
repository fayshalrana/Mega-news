import React from 'react'
import ReactPlayer from 'react-player'
import poster from "../../../..//public/Images/aboutVideo.webp"


const AboutVideo = () => {
  const videoSrc = "https://youtu.be/7tFyOcfEUQA?si=qYza_dqxdFRZ3nEs";
  return (
    <div>
      <ReactPlayer url={videoSrc} playing="true" controls="true"/>
    </div>
  )
}

export default AboutVideo
