import React from 'react'
import PostSlider from './PostSlider';

const Post = () => {
  return (
    <div className='container mx-auto pt-[60px] post overflow-x-hidden'>
      <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[26px] md:mt-[20px]'>popular posts</h2>
      <div className=''>
       <PostSlider/>
      </div>
    </div>
  )
}

export default Post
