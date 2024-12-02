import React, { useState } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import BookMark from '../../../BookMark/BookMark';
const PostItem = ({ data }) => {


    const [marked, setMarked] = useState(false)
const handleSetMark = ()=>{
  setMarked(!marked)
}
    return (
        <div className='group flex flex-col h-[390px] p-[10px] bg-white rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <div className="h-[150px] w-full rounded-md overflow-hidden">
                <Link to='/news/details'>
                <img className='w-full h-full object-cover group-hover:scale-125 transform duration-200' src={data?.postImg} alt="" />
                </Link>
            </div>
        <div className="px-[6px] py-[13px]">
        <Link to="/news/details">
                <h3 className='text-[17px] lg:text-[15px] font-[600] leading-normal capitalize text-[#3E3232]'>{data.postTitle.length > 35 ? `${data.postTitle.substring(0, 35)}...` : `${data.postTitle}`}</h3>
                </Link>
                <p className='text-[14px] lg:text-[13px] py-[14px] lg:py-[7px] font-[400] leading-[20px] tracking-[.25px] text-[#3E3232]/75'>{
                    data.postText.length > 85 ? `${data.postText.substring(0, 85)}...` : `${data.postText}`
                }</p>
            </div>
            <div className="py-[13px] px-[16px] bg-slate-400/10 rounded-md mt-auto flex gap-[10px] items-center">
                <Link to="/profile" className="w-[44px] h-[44px] rounded-[12px] overflow-hidden">
                    <img className='w-full h-full object-cover' src={data?.ownerImg} alt="" />
                </Link>
                <div className="">
                    <Link to='/profile'>
                    <h3 className='text-[14px] font-[600] leading-[20px] tracking-[.1px] text-[#3E3232]'>{data.ownerName}</h3></Link>
                    <p className='text-[12px] font-[400] leading-[18px] tracking-[.25px] text-[#3E3232]/75'>{data.postDate}</p>
                </div>
                <div onClick={handleSetMark} className='ml-auto text-[25px] text-gray-400 cursor-pointer'>
                    <button type='button'>
                <BookMark marked={marked}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostItem
