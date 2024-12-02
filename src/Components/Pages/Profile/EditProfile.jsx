import React, { useRef } from 'react'
import { FaRegImage, FaPlus, FaEyeDropper, FaCode, FaAlignLeft, FaLink, FaRegFolder, FaPaperPlane } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const EditProfile = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleFileChange = event => {
    event.preventDefault()
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  }
  return (
    <div className="container mx-auto mt-[20px]">
      <div className="w-full pb-[10px] md:pb-[45px] md:mt-[20px] lg:pb-[20px]">
        <ul className='flex items-center gap-[2px] text-[12px] font-[400] leading-normal'>
          <Link to="/" className='text-[#3E3232]'>Home</Link>
          <span><IoIosArrowForward /></span>
          <span className="text-[#3E323280]/50">Contact Us</span>
        </ul>
      </div>
      <form>
      <div className="flex gap-[23px] flex-col lg:flex-row mb-[20px]">
            <div className="flex flex-col gap-[15px] w-full lg:w-[55%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">First name</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="text" placeholder='Your First Name' required/>
            </div>
            <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">Last Name</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="text" required placeholder='Your Last Name'/>
            </div>
            <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">user name</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="text" required placeholder='Your User Name'/>
            </div>
          </div>
      <div className="flex gap-[23px] flex-col lg:flex-row mb-[20px]">
            <div className="flex flex-col gap-[15px] w-full lg:w-[55%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">Old Password</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="password" required placeholder="Enter Your Old Password"/>
            </div>
            <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">Password</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="password" required placeholder='Enter Your New Password'/>
            </div>
            <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
              <label className='md:text-[16px] text-[12px] font-[600] leading-normal capitalize' htmlFor="">Email</label>
              <input className='text-[12px] md:text-[14px] w-full border-none py-[5px] bg-gray-100 rounded-[8px] px-[15px] focus:ring-0' type="email" required placeholder='Enter Your Email'/>
            </div>
          </div>
          <div className="mb-[20px]">
          <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add banner</label>
              <div className=" bg-gray-100 rounded-[12px] h-[240px] p-[20px] mt-[15px]">
                <div className="border-dashed border-gray-600 flex flex-col md:flex-row gap-[20px] justify-center h-full w-full items-center">
                  <FaRegImage  className='text-[100px] text-gray-400' />
                  <div className="flex flex-col gap-[24px]">
                  <p className='text-[12px] font-[400] leading-normal capitalize'>Drop image here, paste or</p>
                  <input ref={inputRef} onChange={handleFileChange} type="file" className='hidden' />
                  <button type='button' onClick={handleClick} className='flex items-center gap-[8px] py-[10px] pr-[24px] pl-[15px] border border-gray-400 rounded-[12px] text-[14px]'><FaPlus />Select</button>
                  </div>
                </div>
              </div>
          </div>
        <div className='flex flex-col lg:grid grid-cols-4 gap-[20px]'>
          
          <div className="col-span-3 flex flex-col gap-[20px]">
            <div className="">
              <h3 className='text-[16px] font-[600] leading-normal capitalize'>explanation</h3>
              <div className="w-full mt-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-[12px] py-[30px] px-[20px]">
                <div className="">
                  <ul className='flex gap-[4px] md:gap-[20px] justify-between md:justify-start items-center flex-wrap'>
                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaRegImage className='text-gray-500' /><span className='hidden md:inline'>image</span></Link>
                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaEyeDropper className='text-gray-500' /><span className='hidden md:inline'>color</span></Link>
                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaCode className='text-gray-500' /><span className='hidden md:inline'>Text</span></Link>
                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaAlignLeft className='text-gray-500' /><span className='hidden md:inline'>Align</span></Link>
                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaLink className='text-gray-500' /><span className='hidden md:inline'>Link</span></Link>
                  </ul>
                </div>
                <div className="mt-[20px]">
                  <textarea className='text-[12px] md:text-[15px] w-full h-[337px] p-[20px] rounded-[12px] bg-gray-100 border-none focus:ring-0' placeholder='Type...'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-[15px] w-full">
              <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add image</label>
              <div className=" bg-gray-100 rounded-[12px] h-[240px] p-[20px]">
                <div className="border-dashed border-gray-600 flex flex-col justify-center h-full w-full items-center">
                  <FaRegImage  className='text-[100px] text-gray-400' />
                  <p className='pt-[35px] pb-[25px]'>Drop image here, paste or</p>
                  <input ref={inputRef} onChange={handleFileChange} type="file" className='hidden' />
                  <button onClick={handleClick} className='flex items-center gap-[8px] py-[10px] pr-[24px] pl-[15px] border border-gray-400 rounded-[12px]'><FaPlus />Select</button>
                </div>
              </div>
              <div className="pb-[6rem] md:pb-0">
                <ul className='flex gap-[10px] justify-between md:justify-end items-center'>
               
                  <button type='submit' className='text-[14px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaPaperPlane className='group-hover:text-white text-gray-500' />send</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
