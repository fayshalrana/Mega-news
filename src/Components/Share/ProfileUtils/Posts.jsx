import React, { useContext } from 'react'
import chatImg from '../../../../public/Images/profileChat.png'
import { BsEmojiAngry } from "react-icons/bs";
import PostItem from '../../Pages/Home/Post/PostItem';
import { postContext } from '../../../../utils/Posts/PostsProvider';
import ProfileChart from './ProfileChart/ProfileChart';
const Posts = () => {
    const { posts } = useContext(postContext)


    return (
        <>
            <div className='flex flex-col lg:grid grid-cols-4 gap-[20px] my-[45px]'>
                <div className="col-span-3 flex flex-col gap-[20px]">
                    <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%]'>video post</h2>
                    <div className="px-[33px] py-[58px] rounded-[12px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-x-auto">
                        <div className="w-full h-full">
                           <ProfileChart/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%]'>Satisfaction of posts</h2>

                    <div className="grid grid-cols-3  gap-[12px] p-[12px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[12px] w-full h-full">
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[10px] bg-gray-100 px-[7px] py-[10px] rounded-[12px]">
                            <p className='text-[12px] font-[400] capitalize text-center'>August 2022</p>
                            <BsEmojiAngry className='text-[25px] lg:hidden xl:inline' />
                            <p className='text-[12px] font-[400] capitalize'>20 points</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-[4rem] md-pb-0">
                <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%]'>Your post</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[30px] gap-[24px]">
                {
            posts.slice(0, 8).map((post, idx) => <PostItem key={idx} data={post} />)
          }
                </div>
            </div>
        </>

    )
}

export default Posts
