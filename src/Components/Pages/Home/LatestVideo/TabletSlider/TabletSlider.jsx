import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import './Slider.css'
import './TabletSlider.css'

const TabletSlider = ({ bannerData }) => {

    const pagination = {
        clickable: true,

    };
    return (
        <div>
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={pagination}
                navigation
                loop={true}
                className=' bg-[#F5F5F5] rounded-[12px]'
            >
                {
                    bannerData.map((item) => (<SwiperSlide key={item.id}>
                        
                        <div className='h-[295px] md:h-[450px] w-full md:p-[10px] flex items-end rounded-[12px]' style={{ background: `url(${item.backgroundImage})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="bg-white/75 p-[16px] md:rounded-[12px] backdrop-blur-sm w-full leading-normal pb-[40px] md:pb-[16px]">
                                <h3 className='text-[16px] font-[600] md:text-[25px] md:font-[400]'>{item.title}</h3>
                                <p className='text-[14px] font-[400] leading-[20px] tracking-[.25px] capitalize hidden'>{
                                    item.subtitle.length > 150 ? `${item.subtitle.substring(0, 150)}...` : `${item.subtitle}`
                                }</p>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default TabletSlider
