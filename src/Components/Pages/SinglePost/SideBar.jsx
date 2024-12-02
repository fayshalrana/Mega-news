import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import SideBarPost from './SideBarPost';
import { useNavigate } from 'react-router-dom';
import team4 from '../../../../public/Images/team/team4.jpeg'
import post1 from '../../../../public/Images/Post/post13.jpeg'
import post2 from '../../../../public/Images/Post/post14.jpeg'
import post3 from '../../../../public/Images/Post/post16.jpeg'
import post4 from '../../../../public/Images/Post/post17.jpeg'
import post5 from '../../../../public/Images/Post/post18.jpeg'

const SideBar = () => {
  const navigate = useNavigate()

  const visitWriter = () => {
    navigate('/writer');
  }

  return (
    <div className='flex flex-col gap-[25px]'>
     <div className="md:flex gap-[20px] lg:flex-col ">
     <div className="flex gap-[20px]  flex-col">
        <div className="flex justify-between md:gap-[10px] items-center">
          <button  type="button" className='bg-[#F5F5F5] rounded-[12px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500 py-[10px] pl-[12px] xl-[10px] pr-[20px] lg:pr-[12px] flex gap-[8px] items-center'><FaRegPaperPlane className='text-[13px] hidden md:inline' />Shear</button>
          <button  type="button" className='bg-[#F5F5F5] rounded-[12px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500 py-[10px] pl-[12px] xl-[10px] pr-[20px] lg:pr-[12px] flex gap-[8px] items-center'><CiBookmark className='text-[13px] hidden md:inline' />Marking</button>
          <button  type="button" className='bg-[#F5F5F5] rounded-[12px] text-[14px] font-[500] leading-[20px] capitalize text-gray-500 py-[10px] pl-[12px] xl-[10px] pr-[20px] lg:pr-[12px] flex gap-[8px] items-center'><FaRegCommentDots className='text-[13px] hidden md:inline' />comment</button>
        </div>
        <div onClick={visitWriter} className="cursor-pointer flex gap-[10px] justify-start items-start p-[15px] bg-[#F5F5F5] rounded-[12px]">
          <div className=" w-[70px] md:w-[87px] h-[70px]  md:h-[87px] rounded-[12px] overflow-hidden">
            <img className='w-full h-full object-cover' src={team4} alt="" />
          </div>
          <div className="flex flex-col gap-[5px] md:gap-[16px]">
            <h3 className='text-[15px] font-[500] leading-normal capitalize text-[#3E3232]'>Louis Hoebregts</h3>
            <button type='button' className='py-[10px] pl-[10px] md:pl-[16px] pr-[12px] md:pr-[20px] flex items-center gap-[8px] text-[14px] font-[500] leading-[20px] capitalize text-white bg-[#F81539BF]/75 rounded-[12px]'><FaPlus className='text-[18px]' />Follow</button>
          </div>
          <span className='ml-auto text-[14px] font-[400] leading-[20px] tracking-[.25px]'>27 Post</span>
        </div>
      </div>
      <div className="p-[15px] bg-[#F5F5F5] rounded-[12px] hidden md:inline">
        <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>tags</h2>
        <div className="flex justify-start items-center gap-[14px] flex-wrap text-[13px] font-[500] leading-normal capitalize text-[#6c6363]">
          <span>Montenegro</span>
          <span>Visit Croatia</span>
          <span>Luxury Travel</span>
          <span>Travel Log</span>
          <span>Paradise Island</span>
          <span>Travel Info</span>
        </div>
      </div>
     </div>
      <div className="p-[15px] bg-[#F5F5F5] rounded-[12px] md:hidden lg:inline">
        <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>tags</h2>
        <div className="flex justify-start items-center gap-[14px] flex-wrap text-[13px] font-[500] leading-normal capitalize text-[#6c6363]">
          <span>Montenegro</span>
          <span>Visit Croatia</span>
          <span>Luxury Travel</span>
          <span>Travel Log</span>
          <span>Paradise Island</span>
          <span>Travel Info</span>
        </div>
      </div>
      <div className="p-[15px] bg-[#F5F5F5] hidden lg:inline rounded-[12px]">
        <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>top posts</h2>
        <div className="flex flex-col gap-[20px]">
          <SideBarPost img={post1}/>
          <SideBarPost img={post2}/>
          <SideBarPost img={post3}/>
          <SideBarPost img={post4}/>
          <SideBarPost img={post5}/>
        </div>
      </div>
   <div className="md:flex gap-[20px] lg:flex-col">
   <div style={{ background: `url(https://s3-alpha-sig.figma.com/img/0196/b16b/00ec6b607a7ce18a9a504cbc9c3ded95?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATE5RcpHyAbvTfn9TmKk1REOW2XZF~gq2i3vr-A7RhCAnkCgqPDHucD0FVtaGvh5oNwy-ek0vn9xEBlBcxkPTVpS9ICwzNlQ5rlbUCZA4WS1mrJ4IkxpqMHc0DPeKVajXc94j5hP87csUuAUrlzsQDVXRFajLCem6AySSOkdSUYeo3vrHeF7M~tH2tvcYzc85zT-ZWjYnNtnubA29iDWkC8Nr26JIStof1AVt~LQx4BPo~03J4naMSgqDYOI-tv2Ow2SaEF80~7Mta85ryxa1VyeQaKdN4SqCdNLqrgitS~oTSJwk7o8kfVmWVsB0joBAME1DPlAizYPi~aT291gPw__)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className="w-full h-[180px] rounded-[12px] overflow-hidden">
        <div className="flex justify-center items-center w-full h-full  backdrop-blur-sm">
          <h3 className='text-[20px] font-[500] leading-normal capitalize text-white'>Advertising</h3>
        </div>
      </div>
      <div style={{ background: `url(https://s3-alpha-sig.figma.com/img/bcaa/1998/c061dfefe4e2504912040d61133515da?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f~fwWG5t-DRC5XCEwucX8kpTHlVVkO~8XYL1U--GC6~XJmTw4D-cswQB~qbhwdoFtuJa1UKqRaaUc56B6FqCCOoWPMQCZd8OcLQXVE1f0I6S2GtZBAp-LIXXr0OkU8ggfwaawHiaLqe~0~K6HZcG~YTlOq-uqyrRlNsXJ91Q3vTlqJQ1~Yb1iCKauAsRcuerNE-FYr9Pw~9MbSyBhTO5UwxUv9BGpM8DROP7CGCArDd2JjJ8pXBwukGRX0SYQejD50Gu~fqVf2aoNT8M1IUtP4mSQOBonRBAN5YcPwWCGq9~U36XB-Y3FqRsEkXwhZUVkIKkzJNch~HIoQFw4D4qqA__)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className="w-full h-[180px] rounded-[12px] overflow-hidden hidden md:inline lg:inline">
        <div className="flex justify-center items-center w-full h-full  backdrop-blur-sm">
          <h3 className='text-[20px] font-[500] leading-normal capitalize text-white'>Advertising</h3>
        </div>
      </div>
   </div>
    </div>
  )
}

export default SideBar
