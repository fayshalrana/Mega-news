import React from 'react'
import NewPostItem from '../NewPost/NewPostItem'
import { FaPlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const FirstSlider = ({ groupedArrays }) => {
  const [firstSlid] = groupedArrays.slice(0, 1)
  const lmtFirstSlide = firstSlid.slice(2, 4)
  const [firstElm] = firstSlid.slice(0, 1)

  return (
    <div className='grid grid-cols-2 gap-[24px]'>
      {
        <div className='relative w-full p-[10px] flex items-end rounded-[12px]' style={{ background: `url(${firstElm.postImg})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="bg-white/75 p-[16px] rounded-[12px] backdrop-blur-sm w-full leading-normal pb-[16px]">
            <Link to="news/details">
            <h3 className='text-[25px] lg:text-[18px] font-[400]'>{firstElm.postTitle}</h3>
            </Link>
            <p className='text-[14px] lg:text-[12px] font-[400] leading-[20px] tracking-[.25px] capitalize'>{
              firstElm.postText.length > 150 ? `${firstElm.postText.substring(0, 150)}...` : `${firstElm.postText}`
            }</p>
          </div>
          <div className="bg-[white]/70 w-[120px] lg:w-[80px] h-[120px] lg:h-[80px] top-[40%] left-[50%] transform translate-x-[-50%] rounded-full flex items-center justify-center absolute">
          <FaPlay className='text-[60px] lg:text-[40px] lg:pl-[8px] pl-[16px] text-[#F81539] cursor-pointer'/>
          </div>
        </div>
      }
      <div className="flex gap-[24px] flex-col">
        {
          lmtFirstSlide.map((elm, idx) => <NewPostItem key={elm.id} post={elm}></NewPostItem>)
        }
      </div>
    </div>
  )
}

export default FirstSlider
