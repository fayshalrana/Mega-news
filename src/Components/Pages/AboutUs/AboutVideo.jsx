import React from 'react'
import VideoPlayer from 'react-video-js-player';
import poster from "../../../..//public/Images/aboutVideo.png"
import video from "../../../..//public/Video/video.mp4"

const AboutVideo = () => {
    const videoSrc = video;
  return (
    <div>
      <VideoPlayer
      src={videoSrc}
    poster={poster}
      />
    </div>
  )
}

export default AboutVideo
