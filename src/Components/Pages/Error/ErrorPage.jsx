import React from 'react'

const ErrorPage = () => {
  return (
    <div className='container mx-auto'>
     <div className="h-[60vh] w-full flex justify-center flex-col items-center">
      <h1 className='text-[140px] md:text-[192px] font-[600] leading-normal drop-shadow-2xl shadow-orange-400 text-[#FC4308]'>404</h1>
      <p className='text-[16px] text-center font-[600] text-black/50 capitalize'>OOPS! Page you're looking for doesn't exist. Please use search for help</p>
     </div>
    </div>
  )
}

export default ErrorPage
