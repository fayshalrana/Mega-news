import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import bannerImg from '../../../../public/Images/aboutVideo.webp'
import team1 from '../../../../public/Images/team/team2.webp'
import team2 from '../../../../public/Images/team/team7.webp'
import team3 from '../../../../public/Images/team/team6.webp'
import team4 from '../../../../public/Images/team/team5.webp'
import team5 from '../../../../public/Images/team/team1.webp'
import { FaPlay } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneAndroid, MdOutlineWatchLater } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import AboutVideo from './AboutVideo'
const AboutUs = () => {
  return (
    <>
      <div className='p-0 container mx-auto '>
        <div className="w-full pb-[10px] md:pb-[45px] md:mt-[20px] lg:pb-[20px]">
          <ul className='flex items-center gap-[2px] text-[12px] font-[400] leading-normal'>
            <Link to="/" className='text-[#3E3232]'>Home</Link>
            <span><IoIosArrowForward /></span>
            <span className="text-[#3E323280]/50">Contact Us</span>
          </ul>
        </div>
        <div className="w-full bg-gray-100 rounded-[12px] lg:pt-[32px] p-[14px] lg:pb-[54px] lg:pl-[42px] lg:pr-[32px]">
          <h1 className='text-[20px] font-[600] leading-[33px] lg:text-[36px] lg:font-[400] lg:leading-normal'>We pay attention to your needs and do the best design.</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[53px] pt-[20px] lg:pt-[42px]">
            <div className="">
              <p className='text-[18px] leading-[34px] lowercase '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.</p>
            </div>
            <div className="relative w-full h-full rounded-[12px] overflow-hidden">
              {/* <AboutVideo/> */}
              <img className='w-full h-full object-cover' src={bannerImg} alt="" />
              <div className="absolute w-full h-full flex justify-center items-center top-0 left-0">
                <div className="w-[6rem] h-[6rem] bg-white/70 cursor-pointer flex justify-center items-center rounded-full">
                  <FaPlay className='text-[#F81539] text-[3rem] pl-[6px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F5F5F5] to-white my-[30px] lg:my-[70px]">
        <div className="container mx-auto bg-white">
          <div className="flex gap-[30px] lg:gap-[43px] flex-col lg:flex-row">
            <div className="w-full lg:w-[840px] h-[350px] lg:h-[310px] bg-[#F5F5F5] rounded-tr-[12px] rounded-br-[12px] p-[32px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0068541810733!2d90.37100497447094!3d23.747134988903355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4ce8f8ad0f%3A0xd4c0ea52c962b720!2sRd%2010%2FA%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1705321549416!5m2!1sen!2sbd" className='w-full  h-full focus:ring-0 border-none outline-none' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="py-[32px]">
              <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[30px]'>Mega news information</h2>
              <div className="flex flex-col border-l-4 border-gray-200 px-[10px] pl-[10px] py-[18px gap-[22px]">
                <div className="flex justify-start items-center gap-[8px]">
                  <MdOutlineEmail className='text-[18px] text-gray-400' />
                  <span className='text-[13px] font-[500] leading-normal capitalize'>email : Management@mega.news</span>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                  <MdOutlinePhoneAndroid className='text-[18px] text-gray-400' />
                  <span className='text-[13px] font-[500] leading-normal capitalize'>Phone number : +1(234) 567-8910</span>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                  <FaFax className='text-[18px] text-gray-400' />
                  <span className='text-[13px] font-[500] leading-normal capitalize'>fax : +1(234) 567-8910</span>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                  <FaLocationCrosshairs className='text-[18px] text-gray-400' />
                  <span className='text-[13px] font-[500] leading-normal capitalize'>Address : 1234 Foxrun St.New Lenox, IL 123456</span>
                </div>
                <div className="flex justify-start items-center gap-[8px]">
                  <MdOutlineWatchLater className='text-[18px] text-gray-400' />
                  <span className='text-[13px] font-[500] leading-normal capitalize'>Responding 24 hours a day, 7 days a week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[30px]'>Mega News team</h2>
        <div className="grid grid-cols-2 pb-[4rem] md:pb-0 lg:grid-cols-5 gap-[10px] lg:gap-[24px]">
          <div className="flex flex-col justify-center items-center rounded-[12px] bg-white gap-[10px] md:gap-[24px] p-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className='w-[124px] h-[124px] rounded-[12px]' src={team1} alt="" />
            <h3 className='text-[13px] font-[500] capitalize leading-normal text-black/75'>Designer</h3>
            <button className='w-full rounded-[12px] bg-gray-100 py-[14px] text-center md:text-[16px] font-[400] leading-normal capitalize text-[11px]'>behzad pashaei</button>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[12px] bg-white gap-[10px] md:gap-[24px] p-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className='w-[124px] h-[124px] rounded-[12px]' src={team2} alt="" />
            <h3 className='text-[13px] font-[500] capitalize leading-normal text-black/75'>programmer</h3>
            <button className='w-full rounded-[12px] bg-gray-100 py-[14px] text-center md:text-[16px] font-[400] leading-normal capitalize text-[11px]'>Cassie Evans</button>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[12px] bg-white gap-[10px] md:gap-[24px] p-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className='w-[124px] h-[124px] rounded-[12px]' src={team3} alt="" />
            <h3 className='text-[13px] font-[500] capitalize leading-normal text-black/75'>Marketing</h3>
            <button className='w-full rounded-[12px] bg-gray-100 py-[14px] text-center md:text-[16px] font-[400] leading-normal capitalize text-[11px]'>Louis Hoebregts</button>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[12px] bg-white gap-[10px] md:gap-[24px] p-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className='w-[124px] h-[124px] rounded-[12px]' src={team4} alt="" />
            <h3 className='text-[13px] font-[500] capitalize leading-normal text-black/75'>administrative</h3>
            <button className='w-full rounded-[12px] bg-gray-100 py-[14px] text-center md:text-[16px] font-[400] leading-normal capitalize text-[11px]'>Patricia</button>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[12px] bg-white gap-[10px] md:gap-[24px] p-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className='w-[124px] h-[124px] rounded-[12px]' src={team5} alt="" />
            <h3 className='text-[13px] font-[500] capitalize leading-normal text-black/75'>CEO</h3>
            <button className='w-full rounded-[12px] bg-gray-100 py-[14px] text-center md:text-[16px] font-[400] leading-normal capitalize text-[11px]'>James Hoebregts</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
