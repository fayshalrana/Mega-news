import React from 'react'
import { FaRegCommentDots } from "react-icons/fa";
import { BsEmojiAngry, BsEmojiNeutral, BsEmojiHeartEyes,BsEmojiSurprise, BsEmojiSmile } from "react-icons/bs";

const AddComment = () => {
    return (
        <div className='pt-[20px] lg:pt-[60px]'>
            <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[30px]'>Add a comment</h2>
            <form action="">
                <div className="flex flex-col lg:grid grid-cols-2 gap-[24px]">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <label className='text-[16px] font-[500] leading-normal text-[#3E3232] pb-[5px] md:pb-[15px]' htmlFor="">Name</label>
                            <input className='bg-gray-200 focus:outline-none text-[16px] py-[6px] px-[10px] rounded-[12px] border-none' type="text" placeholder='Enter your name here' required/>
                        </div>
                        <div className="flex flex-col">
                            <label className='text-[16px] font-[500] leading-normal text-[#3E3232] pb-[5px] md:pb-[15px]' htmlFor="">Website</label>
                            <input className='bg-gray-200 focus:outline-none text-[16px] py-[6px] px-[10px] rounded-[12px] border-none' type="text" placeholder='Enter your website url'/>
                        </div>
                        <div className="flex flex-col">
                            <label className='text-[16px] font-[500] leading-normal text-[#3E3232] pb-[5px] md:pb-[15px]' htmlFor="">Email</label>
                            <input className='bg-gray-200 focus:outline-none text-[16px] py-[6px] px-[10px] rounded-[12px] border-none' type="text" placeholder='Your email here' required/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <label className='text-[16px] font-[500] leading-normal text-[#3E3232] pb-[5px] md:pb-[15px]' htmlFor="">Comment</label>
                        <textarea className='h-[254px] w-full rounded-[12px] py-[26px] px-[20px] bg-gray-200 border-none' name="" id="" placeholder='Shear Anything...'></textarea>
                    </div>
                </div>
                <div className="flex-col lg:flex-row flex gap-[20px] items-center justify-between mt-[20px]">
                    <div className="flex-col md:flex-row md:justify-between md:items-center lg:flex-row flex items-start lg:justify-between w-full lg:w-[71%] xl:w-[82%] bg-slate-200 rounded-[12px] pl-[10px] p-[4px] gap-[20px] lg:gap-[11px] xl:items-center">
                        <h3 className='text-[16px] lg:text-[11px] xl:text-[16px] font-[500] leading-normal capitalize'>Rate the usefulness of the article</h3>
                        <div className='flex gap-[24px] items-center lg:gap-[8px]'>
                            <button type='button' className='border-none outline-none'><BsEmojiAngry className='text-[18px] text-[#FC5C65]'/></button>
                            <button type='button' className='border-none outline-none'><BsEmojiNeutral className='text-[18px] text-[#FA8231]'/></button>
                            <button type='button' className='border-none outline-none'><BsEmojiSmile className='text-[18px] text-[#F7B731]'/></button>
                            <button type='button' className='border-none outline-none'><BsEmojiHeartEyes className='text-[18px] text-[#45AAF2]'/></button>
                            <button type='button' className='py-[10px] xl:py-[9px] pl-[16px] pr-[24px] bg-green-600 text-white rounded-[12px] text-[14px] font-[500] leading-[20px] capitalize flex items-center gap-[8px]'><BsEmojiSurprise className='text-[18px]'/>good</button>
                        </div>
                    </div>
                    <button className='py-[10px] lg:text-[11px] pl-[16px] pr-[24px] bg-[#F81539BF]/75 text-white rounded-[12px] flex items-center gap-[8px] ml-auto'><FaRegCommentDots />Send Comment</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment
