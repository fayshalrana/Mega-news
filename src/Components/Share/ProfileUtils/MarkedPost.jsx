import React, {useContext, useState} from 'react'
import PostItem from '../../Pages/Home/Post/PostItem'
import NewPostItem from '../../Pages/Home/NewPost/NewPostItem'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoIosArrowBack } from "react-icons/io";
import { posts } from '../../../Data/Post'

const MarkedPost = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 8;
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const PostToShow = posts.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(posts.length / postPerPage)
    const numbers =[...Array(nPage + 1).keys()].slice(1)
const PrvPage = ()=>{
  if(currentPage !== 1){
    setCurrentPage(currentPage - 1)
  }
}
const changePage = (id)=>{
  setCurrentPage(id)
}
const nextPage = ()=>{
  if(currentPage !== nPage){
    setCurrentPage(currentPage + 1)
  }
}

  return (
    <div className="mt-[20px] lg:mt-0 md:mt-[50px]">
        <h2 className='relative hidden md:block ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] my-[45px]'>Latest posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] md:hidden lg:grid pb-[2rem] md:pb-0'>
          {
            PostToShow.map((post, idx) => <PostItem key={idx} data={post} />)
          }
        </div>

        <div className='md:grid grid-cols-1 gap-[24px] hidden lg:hidden'>
          {
            PostToShow.map((post, idx) => <NewPostItem key={idx} post={post} />)
          }
        </div>
        <div className="flex items-center gap-[8px] md:mt-[20px] md:mb-[40px]">
          {
            currentPage >= 2 && <button onClick={PrvPage} className='py-[8px] px-[14px] rounded-[12px] bg-gray-200 flex justify-center items-center text-[16px] font-[500] capitalize  text-[#3E3232BF]/75 '><IoIosArrowBack /> Prev</button>
          }
         {
          numbers.map((n, idx)=>(
            <button onClick={()=>changePage(n)} key={idx} className={`py-[8px] px-[14px] rounded-[12px] ${currentPage === n? "bg-gray-200": ""} flex justify-center items-center text-[16px]  text-[#3E3232BF]/75  font-[500] capitalize`}>{n}</button>
          ))
         }
        {
          currentPage == nPage ? "" :<button onClick={nextPage} className='py-[8px] pl-[20px] pr-[16px] rounded-[12px] bg-gray-200 text-[#3E3232BF]/75 text-[16px] font-[500] capitalize flex items-center gap-[10px]'>Next<MdKeyboardArrowRight /></button>
        }
        </div>
      </div>
  )
}

export default MarkedPost
