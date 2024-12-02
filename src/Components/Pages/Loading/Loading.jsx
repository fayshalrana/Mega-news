import React from 'react'

const Loading = ({ progress }) => {
    return (
        <div className="flex justify-center flex-col items-center w-screen h-screen">
            <h1 className='text-[50px] font-[700] leading-normal pb-[30px] text-[#FC4308]'>MEGA.news</h1>
            <div className="w-[320px] md:w-[540px] h-[12px] bg-gray-100 rounded-[12px] overflow-hidden">
                <div
                    className={`h-full bg-[#FC4308] rounded-[12px] transform transition-all duration-75`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    )
}

export default Loading
