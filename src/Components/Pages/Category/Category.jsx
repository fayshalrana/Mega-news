import React, { useContext, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { postContext } from '../../../../utils/Posts/PostsProvider'
import PostItem from '../Home/Post/PostItem'
import { MdKeyboardArrowRight } from 'react-icons/md'


const Category = () => {
  const { posts } = useContext(postContext)
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
    <div className='container mx-auto mt-[0] xl:mt-[20px]'>
      <div className="w-full pt-[20px] lg:pt-0">
        <ul className='flex items-center gap-[2px] text-[12px] font-[400] leading-normal'>
          <Link to="/" className='text-[#3E3232]'>Home</Link>
          <span><IoIosArrowForward /></span>
          <span className="text-[#3E323280]/50">Sport</span>
        </ul>
      </div>
      <div className="my-[25px] md:my-[45px] bg-gray-100 rounded-[12px] w-full p-[16px]">
        <ul className='flex items-center gap-[20px]'>
          <Link to="#" className='text-[13px] font-[500] leading-normal capitalize hover:text-[#F81539] cursor-pointer'>new</Link>
          <Link to="#" className='text-[13px] font-[500] leading-normal capitalize hover:text-[#F81539] cursor-pointer'>Trendy</Link>
          <Link to="#" className='text-[13px] font-[500] leading-normal capitalize hover:text-[#F81539] cursor-pointer'>Popular</Link>
          <Link to="#" className='text-[13px] font-[500] leading-normal capitalize hover:text-[#F81539] cursor-pointer'>Top</Link>
        </ul>
      </div>

      <div className="my-[25px] md:my-[45px]">
        <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] md:mb-[30px]'>Category: sport</h2>

        <div className="mt-[25px] lg:mt-[45px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[24px]">
          {
            PostToShow.map((post, idx) => <PostItem key={idx} data={post} />)
          }
        </div>
        <div className="flex items-center justify-center md:justify-start gap-[8px] mt-[20px] mb-[75px]">
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


    </div>
  )
}

export default Category
