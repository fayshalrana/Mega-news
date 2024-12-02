import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const SendPost = () => {
    const currentPage = useLocation()
   
    return (
        <div className=''>
            <div className="my-[45px]">
                <ul className='flex gap-[5px] items-center'>
                    <NavLink to='/profile/send-post' className={`relative text-[16px] font-[500] leading-normal py-[10px] px-[20px] rounded-[12px]  ${currentPage.pathname == "/profile/send-post" ? "before:content-[''] before:absolute before:h-[6px] before:rounded-full before:w-[6px] before:bg-[#F81539] before:left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] bg-gray-200" : ""}`}>Send Post</NavLink>
                    <NavLink to='/profile/send-post/send-video' className={`relative text-[16px] font-[500] leading-normal py-[10px] px-[20px] rounded-[12px] ${currentPage.pathname == "/profile/send-post/send-video" ? "before:content-[''] before:absolute before:h-[6px] before:rounded-full before:w-[6px] before:bg-[#F81539] before:left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] bg-gray-200" : ""}`}>Send Video</NavLink>
                </ul>
            </div>
            <div className="">
                <Outlet/>
            </div>
        </div>
    )
}

export default SendPost
