import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import { postContext } from '../../../../../utils/Posts/PostsProvider'
import VideoSliderItem from './VideoSliderItem';
import FirstSlider from './FirstSlider';

const VideoSlide = () => {
  const {posts} = useContext(postContext)
  const groupedArrays = [];
  
  for (let i = 0; i < posts.length; i += 4) {
    const group = posts.slice(i, i + 4);
    groupedArrays.push(group);
  }
  return (
    <Swiper
    spaceBetween={28}
    slidesPerView={1}
    modules={Navigation}
    navigation
    className='py-[20px] px-[2px]'
  >
    <SwiperSlide>
      <FirstSlider groupedArrays={groupedArrays}/>
    </SwiperSlide>
    {
      groupedArrays.map((posts, idx) => (<SwiperSlide key={idx}>
        <VideoSliderItem posts={posts} />
      </SwiperSlide>))
    }
  </Swiper>
  )
}

export default VideoSlide
