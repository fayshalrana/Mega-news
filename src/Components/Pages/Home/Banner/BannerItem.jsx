import React from 'react'
import { NavLink } from 'react-router-dom'

const BannerItem = ({ data }) => {
    const subtitle = data.subtitle
    return (
        <div className='h-[450px] w-full p-[10px] flex items-end rounded-[12px]' style={{ background: `url(${data.backgroundImage})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="bg-white/75 p-[16px] rounded-[12px] backdrop-blur-sm w-full leading-normal pb-[16px]">
               <NavLink to='/news/details'>
               <h3 className='text-[25px] lg:text-[14px] font-[400]'>{data.title}</h3>
               </NavLink>
                <p className='text-[14px] lg:text-[11px] font-[400] leading-[20px] tracking-[.25px] capitalize'>{
                    data.subtitle.length > 85 ? `${data.subtitle.substring(0, 85)}...` : `${data.subtitle}`
                }</p>
            </div>
        </div>
    )
}

export default BannerItem
