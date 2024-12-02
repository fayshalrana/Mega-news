import Reac, { useContext } from 'react'
import { postContext } from '../../../../../utils/Posts/PostsProvider'
import NewPostItem from './NewPostItem'
import { IoIosArrowForward } from "react-icons/io";
import { posts } from '../../../../Data/Post';
const NewPost = () => {

    // const {posts} = useContext(postContext)
    
    const sixPost = posts.slice(0, 6)
  return (
    <div className='container mx-auto pt-[40px] post overflow-hidden px-[3px]'>
   <div className="flex justify-between items-center md:pt-[20px]">
   <h2 className='section_header'>new posts</h2>
   <button className='text-[14px] flex items-center gap-[8px] font-[500] leading-[20px] capitalize py-[10px] pl-[24px] pr-[16px] rounded-[12px] bg-[#f5f5f5] text-[#3E3232BF]/75'>Show all<IoIosArrowForward /></button>
   </div>
    <div className='lg:grid lg:grid-cols-2 md:grid-col-1 flex flex-col gap-[24px] py-[38px]'>
    {
        sixPost.map(post=><NewPostItem key={post.id} post={post}></NewPostItem>)
    }
    </div>
  </div>
  )
}

export default NewPost
