import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css';
import img1 from '../../../../../public/Images/social/pet.webp'
import './Category.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import cat1 from '../../../../../public/Images/category/cat1.webp'
import cat2 from '../../../../../public/Images/category/cat2.webp'
import cat3 from '../../../../../public/Images/category/cat3.webp'
import cat4 from '../../../../../public/Images/category/cat4.webp'
import cat5 from '../../../../../public/Images/category/cat5.webp'
import cat6 from '../../../../../public/Images/category/cat6.webp'
import cat7 from '../../../../../public/Images/category/cat7.webp'


const Category = () => {
    const swiperrRef = useRef(null);
    const category = [
        {
            image: cat1,
            name: "Food"
        },
        {
            image: cat2,
            name: "animal"
        },
        {
            image: cat3,
            name: "car"
        },
        {
            image: cat4,
            name: "sport"
        },
        {
            image: cat5,
            name: "music"
        },
        {
            image: cat6,
            name: "technology"
        },
        {
            image: cat7,
            name: "abstract"
        },
        {
            image: cat1,
            name: "Food"
        },
        {
            image: cat2,
            name: "animal"
        },
        {
            image: cat3,
            name: "car"
        },
        {
            image: cat4,
            name: "sport"
        },
        {
            image: cat5,
            name: "music"
        },
        {
            image: cat6,
            name: "technology"
        },
        {
            image: cat7,
            name: "abstract"
        },

    ]
    const handleSlideChange = () => {
        const activeIndex = swiperrRef.current.swiper.realIndex;

        // Your custom logic for showing/hiding arrows
        const leftArrow = document.querySelector('.swiper-button-prev');
        const rightArrow = document.querySelector('.swiper-button-next');

        if (activeIndex === 0) {
            leftArrow.style.display = 'none';
        } else {
            leftArrow.style.display = 'block';
        }

        if (category.length === 1 || activeIndex === category.length - 1) {
            // Hide the right arrow if there is only one slide or if at the last slide
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'block';
        }
    };

    return (
        <div className="container mx-auto lg:block category md:hidden hidden">
            <Swiper
                spaceBetween={24}
                slidesPerView={8}
                modules={[Navigation]}
                navigation
                loop={false}
                onSlideChange={() => handleSlideChange()}
                ref={swiperrRef}
                className='px-[14px] py-[10px] bg-[#F5F5F5] rounded-[12px]'
            >
                {
                    category.map((item, idx) => (<SwiperSlide key={idx}>
                        <Link to="/category">
                            <div className='rounded-[12px] overflow-hidden cursor-pointer' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                                <div className="py-[14px] w-full h-full rounded-[12px] bg-black/10 flex justify-center items-center backdrop-blur-sm">
                                    <p to='/category' className='text-white text-[16px] lg:text-[10px] font-[500] leading-normal capitalize'>#{item.name}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default Category
