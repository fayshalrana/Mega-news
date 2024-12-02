import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = ({ bannerData }) => {


  const pagination = {
    clickable: true,
  };


  return (
    <div>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={pagination}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='bg-[#F5F5F5] rounded-[12px]'
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className='h-[450px] w-full p-[10px] flex items-end rounded-[12px]'
              style={{
                background: `url(${item.backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
            <div className='bg-white/75 p-[16px] rounded-[12px] backdrop-blur-sm w-full leading-normal pb-[16px]'>
            <Link to='/news/details'>
                <h3 className='text-[25px] lg:text-[16px] font-[400]'>{item.title}</h3>
            </Link>
                <p className='text-[14px] lg:text-[12px] font-[400] leading-[20px] tracking-[.25px] capitalize'>
                  {item.subtitle.length > 150 ? `${item.subtitle.substring(0, 150)}...` : `${item.subtitle}`}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
