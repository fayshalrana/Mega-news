import React, { useContext } from 'react'
import VideoSlide from './VideoSlide'
import './FristSlider.css'
import { postContext } from '../../../../../utils/Posts/PostsProvider'
import Slider from '../Banner/Slider/Slider'
import TabletSlider from './TabletSlider/TabletSlider'
const LatestVideo = () => {
const {bannerData} = useContext(postContext)
  return (
    <div className="bg-[#F5F5F5]">
      <div className='container mx-auto overflow-hidden'>
      <h2 className='relative  ml-[10px] xl:mt-[30px]  capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] mb-[26px] before:transform before:translate-y-[-50%]'>Latest Video</h2>

      <div className="video relative hidden lg:block lg:pb-[2rem]">
          <VideoSlide/>
          <div className="absolute top-[50%] transform translate-y-[-50%] right-[-180px] z-50 h-[93%]  w-[400px] lg:w-[270px] filter blur-md bg-gradient-to-r from-white/40 rounded-2xl to-[#F5F5F5]"></div>
      </div>
      <div className="tablet lg:hidden block">
      <TabletSlider bannerData={bannerData}/>
      </div>
    </div>
    </div>
  )
}

export default LatestVideo
