import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaPlus, FaNewspaper } from "react-icons/fa6";
import { FaRegStar, FaRegUser, FaUserEdit } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import PostItem from '../Home/Post/PostItem';
import NewPostItem from '../Home/NewPost/NewPostItem';

import banner from '../../../../public/Images/aboutVideo.png'
import user from '../../../../public/Images/team/team4.webp'

const Profile = () => {
  const navigate = useNavigate()
  const currentPage = useLocation()

  const handleEditPage = () => {
    navigate('/edit-profile')
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
          <div className="flex items-start gap-[8px] md:gap[10px] justify-start lg:items-center w-full md:w-auto xl:w-auto xl:justify-start md:justify-start relative">
            <div className="w-[75px] md:w-[87px] h-[75px] md:h-[87px] rounded-[12px] overflow-hidden">
              <img className='w-full h-full object-cover' src={user} alt="" />
            </div>

            {/* For Mobile version */}
            <div className="flex gap-[20px] flex-col">
              <h3 className='text-[16px] font-[600] leading-normal capitalize'>Louis Hoebregts</h3>
              <div className='flex gap-[16px] md:gap-[30px] items-center lg:hidden'>
                <NavLink to='/profile' className={`flex items-center gap-[8px] text-[14px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname == "profile" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>marked</NavLink>
                <NavLink to='/profile/send-post' className={`flex items-center gap-[8px] text-[14px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname == "profile" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>Send post</NavLink>
                <NavLink className={`flex items-center gap-[8px] text-[14px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname === "profile" || currentPage.pathname === "/profile/send-post/send-video" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>Post</NavLink>
              </div>
            </div>
            <Link to="/profile" className='py-[10px] pl-[16px] pr-[20px] text-[14px] absolute right-0 md:hidden font-[500] leading-[20px] capitalize text-white bg-[#F81539BF]/75 flex items-center gap-[8px] rounded-[12px]'><FaUserEdit /></Link>
          </div>

          {/* For Desktop version  */}
          <div className='lg:flex gap-[60px] items-center hidden'>
            <NavLink to="/profile" className={`flex items-center gap-[8px] text-[16px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname == "/profile" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>marked</NavLink>
            <NavLink to="/profile/send-post" className={`flex items-center gap-[8px] text-[16px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname == "/profile/send-post" || currentPage.pathname === "/profile/send-post/send-video" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>Send post</NavLink>
            <NavLink to="/profile/posts" className={`flex items-center gap-[8px] text-[16px] font-[600] leading-[20px] capitalize text-[#3E3232BF]/75 relative ${currentPage.pathname == "/profile/posts" ? " before:content-[''] before:absolute before:h-[4px] before:rounded-[12px] before:w-[10px] before:bg-[#F81539] before:left-0 before:-bottom-[2px]" : ""}`}>Post</NavLink>
          </div>
          <div className="hidden md:inline">
            <Link to="/edit-profile" className='py-[10px] pl-[16px] pr-[20px] text-[14px] font-[600] leading-[20px] capitalize text-[#F81539] border border-gray-400 flex items-center gap-[8px] rounded-[12px]'><FaUserEdit />Edit Profile</Link>
          </div>
        </div>
      </div>

      <Outlet />

    </div>
  )
}

export default Profile
