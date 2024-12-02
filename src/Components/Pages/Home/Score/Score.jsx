import React from 'react'
import ScoreBoard from './ScoreBoard'
import Calender from './Calender'
import Match from './Match'
import matchBg from '../../../../../public/Images/category/cat5.jpeg'
const Score = () => {
  return (
    <div className='mt-[70px] lg:mt-[20px]' style={{ background: `url(${matchBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="backdrop-blur-md w-full h-full lg:py-[65px] py-[30px]">
        <div className="container mx-auto flex md:justify-center lg:gap-[24px] md:gap-[130px]">
          <div className=" xl:w-[30%] lg:w-[30.3%] w-full md:hidden lg:block"><Calender /></div>
          <div className=" xl:w-[40%] lg:w-[35%] hidden lg:inline"><ScoreBoard /></div>
          <div className="xl:w-[30%] lg:w-[30.3%] md:w-[478px] md:inline hidden lg:inline"><Match /></div>
        </div>
      </div>
    </div>
  )
}

export default Score
