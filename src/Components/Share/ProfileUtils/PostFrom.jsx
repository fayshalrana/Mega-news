import React, { useRef } from 'react'
import { FaRegImage, FaPlus, FaEyeDropper, FaCode, FaAlignLeft, FaLink, FaRegFolderClosed, FaPaperPlane } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const PostFrom = () => {
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
        <form>
            <div className='flex flex-col lg:grid grid-cols-4 gap-[20px]'>
                <div className="col-span-3 flex flex-col gap-[20px]">
                    <div className="flex gap-[23px] flex-col lg:flex-row">
                        <div className="flex flex-col gap-[15px] w-full lg:w-[55%]">
                            <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Title</label>
                            <input className='w-full border-none focus:ring-0 py-[5px] px-[15px] bg-gray-100 rounded-[8px]' type="text" placeholder='Add Title Here' required />
                        </div>
                        <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
                            <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add tags</label>
                            <input className='w-full border-none focus:ring-0 py-[5px] px-[15px] bg-gray-100 rounded-[8px]' type="text" placeholder='Add Tags Here'/>
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-[16px] font-[600] leading-normal capitalize'>explanation</h3>
                        <div className="w-full mt-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-[12px] py-[30px] px-[20px]">
                            <div className="">
                                <div className='flex gap-[4px] md:gap-[20px] justify-between md:justify-start items-center flex-wrap'>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaRegImage className='text-gray-500' /><span className='hidden md:inline'>image</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaEyeDropper className='text-gray-500' /><span className='hidden md:inline'>color</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaCode  className='text-gray-500'/><span className='hidden md:inline'>Text</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaAlignLeft  className='text-gray-500'/><span className='hidden md:inline'>Align</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaLink  className='text-gray-500'/><span className='hidden md:inline'>Link</span></Link>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <textarea className='w-full h-[337px] p-[20px] rounded-[12px] bg-gray-100 border-none focus:ring-0' placeholder='Type...'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-[15px] w-full">
                        <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add image</label>
                        <div className=" bg-gray-100 rounded-[12px] h-[240px] p-[20px]">
                            <div className="border-dashed border-gray-600 flex flex-col justify-center h-full w-full items-center">
                                <FaRegImage className='text-[100px] text-gray-400' />
                                <p className='pt-[35px] pb-[25px]'>Drop image here, paste or</p>
                                <input ref={inputRef} onChange={handleFileChange} type="file" className='hidden' />
                                <button type='button' onClick={handleClick} className='flex items-center gap-[8px] py-[10px] pr-[24px] pl-[15px] border border-gray-400 rounded-[12px]'><FaPlus />Select</button>
                            </div>
                        </div>
                        <div className="pb-[6rem] md:pb-0">
                        <div className='flex gap-[10px] justify-between md:justify-end items-center lg:flex-wrap lg:justify-start'>
                            <button type='button' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaRegFolderClosed  className='group-hover:text-white text-gray-500'/>Draft</button>
                                    <button type='button' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaEye  className='group-hover:text-white text-gray-500'/>Preview</button>
                                    <button type='button' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaPaperPlane  className='group-hover:text-white text-gray-500'/>Public</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PostFrom
