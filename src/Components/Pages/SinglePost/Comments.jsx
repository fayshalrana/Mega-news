import React from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from 'react-router-dom';
import team7 from '../../../../public/Images/team/team7.webp'
import team6 from '../../../../public/Images/team/team6.webp'
import team5 from '../../../../public/Images/team/team5.webp'
import team3 from '../../../../public/Images/team/team3.webp'

const Comments = () => {
    return (
        <div className='pt-[20px] lg:pt-[60px]'>
            <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[30px]'>Comments</h2>
            <div className="relative">
                <div className="w-full rounded-[12px] bg-[#F5F5F5] h-[270px] absolute top-0 left-0"></div>
                <div className="relative z-10 py-[15px] px-[20px]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[10px] items-center">
                            <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden">
                                <Link to="#">
                                    <img className='w-full h-full object-cover' src={team7} alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Link to="#">
                                    <h3 className='text-[16px] font-[500] leading-normal capitalize text-[#3E3232]'>Jon Kantner</h3>
                                </Link>
                                <span className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500'><BsCalendarDate />2022 04 July</span>
                            </div>
                        </div>
                        <button type='button' className='text-[14px] font-[500] flex items-center gap-[8px] leading-[20px] py-[10px] pl-[16px] pr-[24px] bg-gray-200 rounded-[12px] capitalize text-gray-500'><IoArrowRedo className='text-[18px]' /><span className='hidden md:inline'>Reply</span></button>
                    </div>
                    <p className='text-[14px] font-[400] leading-[20px] tracking-[.25px] pt-[15px] lowercase text-[#3E3232]'>When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.</p>
                    <div className="w-full lg:w-[90%] xl:w-[80%] bg-white mt-[40px] mx-auto p-[15px] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="pb-[35px]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-[10px] items-center">
                                    <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden">
                                        <Link to="#">
                                            <img className='w-full h-full object-cover' src={team6} alt="" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-[8px]">
                                        <Link to="#">
                                            <h3 className='text-[16px] font-[500] leading-normal capitalize text-[#3E3232]'>Jon Kantner</h3>
                                        </Link>
                                        <span className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500'><BsCalendarDate />2022 04 July</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[14px] font-[400] leading-[20px] trakcing-[.25px] pt-[15px] lowercase text-[#3E3232]'>When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.</p>
                        </div>
                        <div className="pb-[35px]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-[10px] items-center">
                                    <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden">
                                        <Link to="#">
                                            <img className='w-full h-full object-cover' src={team3} alt="" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-[8px]">
                                        <Link to="#">
                                            <h3 className='text-[16px] font-[500] leading-normal capitalize text-[#3E3232]'>Jon Kantner</h3>
                                        </Link>
                                        <span className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500'><BsCalendarDate />2022 04 July</span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-[14px] font-[400] leading-[20px] trakcing-[.25px] pt-[15px] lowercase text-[#3E3232]'>When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-[12px] mt-[30px] p-[20px] bg-[#F5F5F5]">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[10px] items-center">
                            <div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden">
                                <Link to="#">
                                    <img className='w-full h-full object-cover' src={team5} alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <Link to="#">
                                    <h3 className='text-[16px] font-[500] leading-normal capitalize text-[#3E3232]'>Jon Kantner</h3>
                                </Link>
                                <span className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500'><BsCalendarDate />2022 04 July</span>
                            </div>
                        </div>
                        <button className='text-[14px] font-[500] flex items-center gap-[8px] leading-[20px] py-[10px] pl-[16px] pr-[24px] bg-gray-200 rounded-[12px] capitalize text-gray-500'><IoArrowRedo className='text-[18px]' /><span className='hidden md:inline'>Reply</span></button>
                    </div>
                    <p className='text-[14px] font-[400] leading-[20px] trakcing-[.25px] pt-[15px] lowercase text-[#3E3232]'>When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
