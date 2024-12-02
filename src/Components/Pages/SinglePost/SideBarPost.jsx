import React from 'react'
import { Link } from 'react-router-dom'
import team3 from '../../../../public/Images/team/team3.jpeg'

const SideBarPost = ({img}) => {
  return (
    <div className="flex gap-[10px] items-center">
    <div className="w-[87px] h-[87px] rounded-[12px] overflow-hidden">
      <img className='w-full h-full object-cover' src={img} alt="" />
    </div>
    <div className="w-[223px]">
      <Link to="#">
      <h3 className='text-[14px] font-[500] leading-[20px] tracking-[.25px] text-[#3E3232]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
      </Link>
      <p className='text-[12px] pt-[6px] font-[400] leading-[18px] tracking-[.25px] text-[#6c6363]'>Subhead</p>
    </div>
  </div>
  )
}

export default SideBarPost
