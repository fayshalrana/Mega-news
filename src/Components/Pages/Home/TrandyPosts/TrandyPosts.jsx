import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import './TrendyPosts.css'
import { postContext } from '../../../../../utils/Posts/PostsProvider';
import PostItem from '../Post/PostItem';
const TrandyPosts = () => {
  const { posts } = useContext(postContext)
  return (
    <div className="bg-white">
      <div className='container mx-auto pt-[70px] overflow-hidden'>
        <h2 className='section_header'>Trendy Posts</h2>

        <div className="trendyPosts pb-[4rem] md:pb-0">
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
              }
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
          <div className="">
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrandyPosts
