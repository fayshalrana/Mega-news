import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaPlus, FaNewspaper } from "react-icons/fa6";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { postContext } from '../../../../utils/Posts/PostsProvider'
import PostItem from '../Home/Post/PostItem';
import NewPostItem from '../Home/NewPost/NewPostItem';

import banner from '../../../../public/Images/aboutVideo.png'
import user from '../../../../public/Images/team/team4.jpeg'


const Writer = () => {
  const { posts } = useContext(postContext)
  const navigation = useNavigate()
  const handleProfileVisit =()=>{
    navigation('/profile')
  }
  return (
    <div className='container mx-auto mt-[0] xl:mt-[20px]'>
      <div className="w-full pb-[10px] md:pb-[45px] md:mt-[20px] lg:pb-[20px]">
        <ul className='flex items-center gap-[2px] text-[12px] font-[400] leading-normal'>
          <Link to="/" className='text-[#3E3232]'>Home</Link>
          <span><IoIosArrowForward /></span>
          <span className="text-[#3E323280]/50">Writer</span>
        </ul>
      </div>
      <div className="w-ful bg-gray-200 rounded-[12px] p-[10px]">
        <div className="w-full h-[150px] rounded-[12px] overflow-hidden hidden md:block">
          <img className='w-full h-full object-cover' src={banner} alt="" />
        </div>
        <div className="md:mt-[15px] mt-0 flex justify-between items-center">
          <div className="flex relative items-start gap-[8px] lg:items-center w-full xl:w-auto justify-start">
            <div onClick={handleProfileVisit} className="cursor-pointer w-[75px] md:w-[87px] h-[75px] md:h-[87px] rounded-[12px] overflow-hidden">
              <img className='w-full h-full object-cover' src={user} alt="" />
            </div>
            <div className="flex gap-[20px] flex-col">
            <h3 className='text-[12px] font-[600] leading-normal capitalize'>Louis Hoebregts</h3>
            <ul className='flex gap-[16px] md:gap-[30px] items-center lg:hidden'>
              <li className='flex items-center gap-[3px] md:gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaRegStar /><span className='hidden md:inline'>Rating:</span> 4.2</li>
              <li className='flex items-center gap-[3px] md:gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaRegUser /><span className='hidden md:inline'>Follower: </span>1.2k</li>
              <li className='flex items-center gap-[3px] md:gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaNewspaper /><span className='hidden md:inline'>Post: </span> 29</li>
            </ul>
            </div>
            <button className='py-[7px] absolute pl-[12px] pr-[12px] text-[14px] md:hidden font-[500] leading-[20px] capitalize text-white bg-[#F81539BF]/75 flex items-center gap-[8px] rounded-[12px] right-0 top-0'><FaPlus />Follow</button>
          </div>
          <div className="">
            <ul className='lg:flex gap-[60px] items-center hidden'>
              <li className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaRegStar /><span className='hidden md:inline'>Rating:</span> 4.2</li>
              <li className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaRegUser /><span className='hidden md:inline'>Follower: </span>1.2k</li>
              <li className='flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-[#3E3232BF]/75'><FaNewspaper /><span className='hidden md:inline'>Post: </span> 29</li>
            </ul>
          </div>
          <div className="hidden md:inline">
            <button type='button' className='py-[10px] pl-[16px] pr-[20px] text-[14px] font-[500] leading-[20px] capitalize text-white bg-[#F81539BF]/75 flex items-center gap-[8px] rounded-[12px]'><FaPlus />Follow</button>
          </div>
        </div>
      </div>


      <div className="mt-[20px] lg:mt-0 md:mt-[50px] pb-[4rem] md:pb-0">
        <h2 className='relative hidden md:block ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] my-[45px]'>Latest posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] md:hidden lg:grid pb-[2rem] md:pb-0'>
          {
            posts.slice(0, 12).map((post, idx) => <PostItem key={idx} data={post}/>)
          }
        </div>

        <div className='md:grid grid-cols-1 gap-[24px] hidden lg:hidden'>
          {
            posts.slice(0, 12).map((post, idx) => <NewPostItem key={idx} post={post}/>)
          }
        </div>
        <div className="flex items-center gap-[8px] md:mt-[20px] md:mb-[40px]">
          <button className='py-[8px] px-[14px] rounded-[12px] bg-gray-200 flex justify-center items-center text-[16px] font-[500] capitalize'>1</button>
          <button className='py-[8px] px-[14px] rounded-[12px] hover:bg-gray-200 transition duration-200 flex justify-center items-center text-[16px] font-[500] capitalize'>2</button>
          <button className='py-[8px] px-[14px] rounded-[12px] hover:bg-gray-200 transition duration-200 flex justify-center items-center text-[16px] font-[500] capitalize'>3</button>
          <button className='py-[8px] px-[14px] rounded-[12px] flex justify-center items-center text-[20px] font-[500] capitalize'>...</button>
          <button className='py-[8px] px-[14px] rounded-[12px] hover:bg-gray-200 transition duration-200 flex justify-center items-center text-[16px] font-[500] capitalize'>9</button>
          <button className='py-[8px] pl-[20px] pr-[16px] rounded-[12px] bg-gray-200 text-[#3E3232BF]/75 text-[16px] font-[500] capitalize flex items-center gap-[10px]'><span className='hidden md:inline'>Next</span><MdKeyboardArrowRight  /></button>
        </div>
      </div>
    </div>
  )
}

export default Writer
