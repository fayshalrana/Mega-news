import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BookMark from '../../../BookMark/BookMark';

const NewPostItem = ({ post }) => {

    const [marked, setMarked] = useState(false)
    const handleSetMark = () => {
        setMarked(!marked)
    }
    return (
        <div className='group p-[10px] md:flex-row rounded-[12px] flex flex-col  lg:flex-row gap-[10px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
            <div className="xl:w-[742px] lg:w-[300px] lg:h-[190px] md:h-[190px] md:w-[300px] rounded-[12px] overflow-hidden">
               <Link to='/news/details'>
               <img className='w-full h-full object-cover group-hover:scale-125 transform duration-200' src={post.postImg} alt="" />
               </Link>
            </div>
            <div className="w-full flex flex-col ">
               <div>
               <Link to="/news/details">
                    <h1 className='text-[16px] lg:text-[14px] font-[500] leading-normal capitalize'>{post.postTitle}</h1>
               </Link>
                    <p className='text-[14px] lg:text-[13px] lg:pt-[5px] pt-[16px] font-[400] leading-[20px] tracking-[.25px capitalize] text-[#3E3232BF]/75'>{post.postText}</p>
                </div>
                <div className="py-[13px] px-[16px] bg-slate-400/10 rounded-md mt-auto flex gap-[10px] items-center">
                    <div className="w-[44px] h-[44px] rounded-[12px] overflow-hidden">
                        <Link to="/profile">
                        <img className='w-full h-full object-cover' src={post?.ownerImg} alt="" />
                        </Link>
                    </div>
                    <div className="mt-auto">
                       <Link to='/profile'>
                       <h3 className='text-[14px] font-[600] leading-[20px] tracking-[.1px] text-[#3E3232]'>{post.ownerName}</h3></Link>
                        <p className='text-[12px] font-[400] leading-[18px] tracking-[.25px] text-[#3E3232]/75'>{post.postDate}</p>
                    </div>
                    <div onClick={handleSetMark} className='ml-auto text-[25px] text-gray-400 cursor-pointer'>
                        <button type="button">
                        <BookMark marked={marked} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewPostItem
