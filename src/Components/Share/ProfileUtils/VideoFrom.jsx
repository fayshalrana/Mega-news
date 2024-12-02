import React, { useRef } from 'react'
import { FaRegImage, FaPlus, FaEyeDropper, FaCode, FaAlignLeft, FaLink, FaRegFolderClosed, FaPaperPlane, FaFilm } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import petImg from '../../../../public/Images/social/pet.jpeg'
import petImg1 from '../../../../public/Images/social/bar.jpeg'
import petImg2 from '../../../../public/Images/social/boxer.jpeg'
import petImg3 from '../../../../public/Images/social/capul.jpeg'
import petImg4 from '../../../../public/Images/social/car.jpeg'
import petImg5 from '../../../../public/Images/social/headphone.jpeg'
import petImg6 from '../../../../public/Images/social/hotDog.jpeg'
import petImg7 from '../../../../public/Images/social/light.jpeg'
import petImg8 from '../../../../public/Images/social/pet.jpeg'
import petImg9 from '../../../../public/Images/social/boxer.jpeg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
const VideoFrom = () => {
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
                            <input className='w-full border-none py-[5px] px-[15px] focus:ring-0 bg-gray-100 rounded-[8px]' type="text" placeholder='Add Title' required/>
                        </div>
                        <div className="flex flex-col gap-[15px] w-full lg:w-[45%]">
                            <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add tags</label>
                            <input className='w-full border-none py-[5px] px-[15px] focus:ring-0 bg-gray-100 rounded-[8px]' type="text" placeholder='Add tags' required/>
                        </div>
                    </div>
                    <div className="">
                        <h3 className='text-[16px] font-[600] leading-normal capitalize'>explanation</h3>
                        <div className="w-full mt-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-[12px] py-[30px] px-[20px]">
                            <div className="">
                                <div className='flex gap-[20px] justify-between md:justify-start items-center flex-wrap'>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaRegImage className='text-gray-500' /><span className='hidden md:inline'>image</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaEyeDropper className='text-gray-500' /><span className='hidden md:inline'>color</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaCode className='text-gray-500' /><span className='hidden md:inline'>Text</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaAlignLeft className='text-gray-500' /><span className='hidden md:inline'>Align</span></Link>
                                    <Link to="#" className='text-[14px] font-[500] leading-[20px] py-[10px] p-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center'><FaLink className='text-gray-500' /><span className='hidden md:inline'>Link</span></Link>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <textarea className='w-full h-[337px] p-[20px] rounded-[12px] bg-gray-100 border-none focus:ring-0' placeholder='Type...'></textarea>
                            </div>
                        </div>
                    </div>

                    {/* photo add and delete part  */}
                    <div className="p-[20px] flex flex-col lg:flex-row justify-start items-center rounded-[12px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-[16px]">
                        <div className=" bg-gray-100 rounded-[12px] h-[299px] lg:h-[240px] w-full lg:w-[33%] p-[20px]">
                            <div className="border-dashed border-gray-600 flex flex-col justify-center h-full w-full items-center">
                                <FaFilm className='text-[100px] text-gray-400' />
                                <p className='pt-[35px] pb-[25px]'>Drop image here, paste or</p>
                                <input ref={inputRef} onChange={handleFileChange} type="file" className='hidden' />
                                <button type='button' onClick={handleClick} className='flex items-center gap-[8px] py-[10px] pr-[24px] pl-[15px] border border-gray-400 rounded-[12px]'><FaPlus />Select</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[30px] lg:gap-[10px] w-full lg:w-[67%]">
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg1} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg2} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg3} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg4} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg5} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg6} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group">
                                <img className='w-full h-full object-cover' src={petImg7} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group md:hidden lg:inline">
                                <img className='w-full h-full object-cover' src={petImg8} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                            <div className="w-[111px] md:w-full h-[111px] md:h-[150px] lg:h-[90px] rounded-[12px] overflow-hidden relative group md:hidden lg:inline">
                                <img className='w-full h-full object-cover' src={petImg9} alt="" />
                                <div className="w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transform duration-200 absolute top-0 left-0 backdrop-blur-sm bg-slate-100/40 flex justify-center items-center">
                                <RiDeleteBin6Line className='text-[40px] text-white cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-[15px] w-full">
                        <label className='text-[16px] font-[600] leading-normal capitalize' htmlFor="">Add video</label>
                        <div className=" bg-gray-100 rounded-[12px] h-[240px] p-[20px]">
                            <div className="border-dashed border-gray-600 flex flex-col justify-center h-full w-full items-center">
                                <FaFilm className='text-[100px] text-gray-400' />
                                <p className='pt-[35px] pb-[25px]'>Drop image here, paste or</p>
                                <input ref={inputRef} onChange={handleFileChange} type="file" className='hidden' />
                                <button type='button' onClick={handleClick} className='flex items-center gap-[8px] py-[10px] pr-[24px] pl-[15px] border border-gray-400 rounded-[12px]'><FaPlus />Select</button>
                            </div>
                        </div>
                        <div className="pb-[6rem] md:pb-0">
                            <ul className='flex gap-[10px] justify-between md:justify-end items-center lg:flex-wrap lg:justify-start'>
                                <button type='button' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaRegFolderClosed className='group-hover:text-white text-gray-500' />Draft</button>
                                <button type='button' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaEye className='group-hover:text-white text-gray-500' />Preview</button>
                                <button type='submit' className='text-[13px] font-[500] leading-[20px] py-[10px] px-[16px] bg-gray-100 rounded-[12px] flex gap-[8px] items-center hover:bg-[#F81539BF]/75 hover:text-white group cursor-pointer transform duration-200'><FaPaperPlane className='group-hover:text-white text-gray-500' />Public</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default VideoFrom
