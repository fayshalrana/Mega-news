import React, { useContext } from 'react'

import BannerItem from './BannerItem';
import Slider from './Slider/Slider';
import { postContext } from '../../../../../utils/Posts/PostsProvider';


const Banner = () => {
    const {bannerData} = useContext(postContext)
    return (
        <div className='container hidden md:grid mx-auto lg:grid lg:grid-cols-2 pt-[70px] md:pt-[30px] md:grid-cols-1 gap-[24px]'>
            <div className="lg:grid grid-cols-2 gap-[24px] md:hidden">
                {
                    bannerData.slice(0, 2).map(data => <BannerItem key={data.id} data={data} />)
                }

            </div>
            <div className="border w-ful rounded h-[450px] banner">
              <Slider bannerData={bannerData}/>
            </div>
        </div>
    )
}

export default Banner
