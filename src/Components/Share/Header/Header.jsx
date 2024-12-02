import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import user from "../../../../public/Images/avatar/user.png";
import BookMark from "../../BookMark/BookMark";

const Header = () => {
  const [subMenu, setSubMenu] = useState(false);
 

  const hideSubmenu =()=>{
    setSubMenu(!subMenu)
  }
  setTimeout(() => {
    setSubMenu(false)
  }, 1000);

  const [pages, setPages] = useState(false)
  const handleShowPages =()=>{
    setPages(!pages)
  }



  const [showMenu, setShowMenu] = useState(false);
  const menuHandle = () => {
    setShowMenu(!showMenu);
  };
  const hideMenuHandle = () => {
    setShowMenu(!showMenu);
  };
  const [marked, setMarked] = useState(false);
  const handleSetMark = () => {
    setMarked(!marked);
  };

  const [showSubMenus, setShowSubMenu] = useState(false);
  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenus);
  };
  return (
    <div className="container mx-auto pb-[25px] relative xl:pb-0">
      <div className="py-0 md:py-[14px] flex lg:justify-between justify-start md:justify-between gap-[10px]">
        <div className="flex gap-[68px] lg:gap-[30px] items-center">
          <div className="flex items-center gap-[30px]">

            {/* Mobile menu hamburger  */}
            <button
              onClick={menuHandle}
              className="p-[10px] w-[48px] h-[48px] lg:hidden bg-gray-200 rounded-[12px] flex justify-center items-center text-[26px]"
            >
              <IoMenu />
            </button>

            <NavLink
             to='/'
              className="cursor-pointer text-[22px] lg:text-[16px] font-[700] text-[#FC4308] hidden md:inline"
            >
              MEGA.news
            </NavLink>
          </div>

          {/* main menu  */}
          <ul className="lg:flex gap-[30px] hidden">
            <li className="relative group text-[16px] lg:text-[14px] text-[#3E3232] font-normal capitalize cursor-pointer flex items-center gap-1"> Categories
              <IoIosArrowDown />
              <div
              className={`${subMenu? "hidden": "inline"} absolute -left-[40px] top-[25px] border p-[10px] w-[200px] bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transform duration-200 rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[999]`}
            >
              <ul className="flex gap-[5px] flex-col">
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/category" className="w-full block">category 1</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/category" className="w-full block">category 2</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/category" className="w-full block">category 3</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/category" className="w-full block">category 4</NavLink>
                </li>
              </ul>
            </div>
            </li>
            <li className="relative group text-[16px] lg:text-[14px] text-[#3E3232] font-normal capitalize cursor-pointer flex items-center gap-1">
              pages <IoIosArrowDown />
              <div
              className={`${subMenu? "hidden": "inline"} absolute -left-[40px] top-[25px] border p-[10px] w-[200px] bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transform duration-200 rounded-[10px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[999]`}
            >
              <ul className="flex gap-[5px] flex-col">
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/category" className="w-full block">category</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/Profile" className="w-full block">Profile</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/edit-profile" className="w-full block">Edit Profile</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/profile/send-post" className="w-full block">Send post</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/profile/send-post/send-video" className="w-full block">Send video</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/profile/posts" className="w-full block">Post</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/news/details" className="w-full block">News Details</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/writer" className="w-full block">Writer</NavLink>
                </li>
                <li
                onClick={hideSubmenu}
                  className='relative capitalize text-[12px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[5px]'
                >
                  <NavLink to="/error" className="w-full block">404 Page</NavLink>
                </li>
              </ul>
            </div>
            </li>
           
            <li>
             <NavLink to='/contact-us' className="text-[16px] lg:text-[14px] text-[#3E3232] font-normal capitalize cursor-pointer"> Contact us</NavLink>
            </li>
            <li>
            <Link to='/about-us' className="text-[16px] lg:text-[14px] text-[#3E3232] font-normal capitalize cursor-pointer">About us</Link>
            </li>
          </ul>
        </div>
        {/* search bar  */}
        <div className="md:flex gap-[50px] w-full md:w-auto items-center md:justify-end">
          <div className="flex gap-[25px]">
            <div className="py-[5px] px-[8px] lg:p-[8px] lg:py-0 flex rounded-[12px] bg-[#F5F5F5] lg:flex justify-between items-center lg:gap-[5px] gap-[5px]  md:hidden w-full xl:w-[30rem]">
             <button type="button"><BsThreeDotsVertical className="text-[20px]" /></button>
              <input
                className="bg-transparent border-none  w-full lg:text-[12px] xl:py-[5px] pl-[5px] focus:ring-0"
                type="text"
                placeholder="Search Anything"
              />
              <button>
              <FiSearch className="text-[20px]" />
              </button>
            </div>
            <div className="md:flex gap-[8px] items-center hidden">
              <button className="flex items-center gap-[8px] text-[16px] lg:text-[12px] font-[600] text-[#000] lg:w-[100px]">
               <img className="rounded-[12px] lg:h-[30px] lg:w-[30px] overflow-hidden" src={user} alt={user} />
                Behzad <IoIosArrowDown />
              </button>
            </div>
          </div>
          <button
            onClick={handleSetMark}
            className="p-[14px] lg:p-[10px] bg-[#F5F5F5] lg:text-[16px] rounded-[12px] text-[##3E3232] hidden md:inline"
          >
            <BookMark marked={marked} />
          </button>
        </div>
      </div>
      <div className="hidden md:inline">
        <div className="py-[14px] px-[16px] rounded-[12px] bg-[#F5F5F5] sm:flex justify-start items-center gap-0 lg:hidden">
          <button type="button">
          <BsThreeDotsVertical className="text-[20px]" />
          </button>
          <input
            className="bg-transparent w-full focus:ring-0 border-none"
            type="text"
            placeholder="Search Anything"
          />
         <button type="button">
         <FiSearch className="text-[20px]" />
         </button>
        </div>
      </div>
      <div
        className={`lg:hidden w-full md:w-[390px] shadow-md rounded-tr-[20px] rounded-br-[20px] h-screen z-[999] fixed py-[15px] px-[20px] bg-white ${
          showMenu ? "left-0" : "-left-[100%]"
        } top-0 transform duration-200`}
      >
        <div className="flex items-center gap-[30px] justify-between">
          <NavLink to="/"
          onClick={hideMenuHandle}
            className="text-[22px] font-[700] text-[#FC4308]"
          >
            MEGA.news
          </NavLink>
          <button
            onClick={hideMenuHandle}
            className="p-[10px] w-[48px] h-[48px] bg-gray-200 rounded-[12px] flex justify-center items-center text-[26px]"
          >
            <IoMdClose />
          </button>
        </div>


        <div className="mt-[36px]">
          <ul className="flex flex-col gap-[10px]">
            <li
              onClick={handleSubMenu}
            className='relative capitalize text-[16px] font-[600] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 p-[15px] rounded-[12px] flex justify-between items-center '> Category {showSubMenus ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <div
              className={`pl-[10px] transform duration-200 ${
                showSubMenus ? "inline h-full" : "hidden h-0"
              }`}
            >
              <ul>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/category">category 1</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/category">category 1</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/category">category 1</NavLink>
                </li>
              </ul>
            </div>
            <li onClick={handleShowPages} className='relative capitalize text-[16px] font-[600] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 p-[15px] rounded-[12px] flex justify-between items-center'>
              Pages
              {pages ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </li>
            <div
              className={`pl-[10px] transform duration-200 ${
                pages ? "inline h-full" : "hidden h-0"
              }`}
            >
              <ul>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/edit-profile">Edit Profile</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/profile/send-post">Send Post</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/profile/send-post/send-video">Send Video</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/profile/posts">Post</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/news/details">News Details</NavLink>
                </li>
                <li
                  onClick={hideMenuHandle}
                  className='relative capitalize text-[16px] font-[500] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 pl-[15px] py-[4px] rounded-[12px]'
                >
                  <NavLink to="/error">404 page</NavLink>
                </li>
              </ul>
            </div>
            <li
              onClick={hideMenuHandle}
              className='relative capitalize text-[16px] font-[600] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 p-[15px] rounded-[12px]'
            >
              <NavLink to="/contact-us">Contact us</NavLink>
            </li>
            <li
              onClick={hideMenuHandle}
              className='relative capitalize text-[16px] font-[600] before:content-[""] before:absolute before:h-[10px] before:invisible hover:before:visible before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:left-[5px] before:top-[50%] before:transform before:translate-y-[-50%] hover:bg-gray-200 p-[15px] rounded-[12px]'
            >
              <NavLink to="/about-us">About us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
