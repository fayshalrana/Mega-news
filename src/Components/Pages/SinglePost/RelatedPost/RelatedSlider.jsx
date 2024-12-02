import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import PostItem from '../../Home/Post/PostItem';
import { postContext } from '../../../../../utils/Posts/PostsProvider';
import './RelatedSlider.css'

const RelatedSlider = () => {
    const {posts} = useContext(postContext)
  return (
    <div>
        <Swiper
         breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
         1536: {
            width: 1536,
            slidesPerView: 4,
          },
        }}
        spaceBetween={28}
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        loop={true}
        className='py-[20px] px-[2px]'
      >
        {
          posts.map((item) => (<SwiperSlide key={item.id}>
            <PostItem data={item} />
          </SwiperSlide>))
        }
      </Swiper>
    </div>
  )
}

export default RelatedSlider
