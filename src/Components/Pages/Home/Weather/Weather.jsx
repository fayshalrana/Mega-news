import React from 'react'
import weather from '../../../../../public/Images/weather.png'
import weatherBg from '../../../../../public/Images/weatherBg.png'
import { FaSun, FaCloudRain  } from "react-icons/fa6";
import { FaCloudMeatball, FaCloudSun, FaCloudMoon  } from "react-icons/fa";
import { IoCloudyNight } from "react-icons/io5";
import { FaCloudBolt } from "react-icons/fa6";
import { BsCloudDrizzleFill } from "react-icons/bs";
import WeatherChart from './WeatherChart';

const Weather = () => {
  return (
    <div className='bg-gray-100 py-[65px]'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <div className="lg:flex flex-col justify-between h-[514px] w-ful rounded-[12px] overflow-hidden hidden bg-white px-[24px] py-[30px]">
                <div className="flex justify-between">
                  <div className="flex gap-[18px]">
                  <div className="flex items-center gap-[16px]">
                      <FaSun className='text-[49px] font-[400] leading-normal text-yellow-300'/>
                        <h1 className='text-[49px] font-[400] leading-normal text-black'>32 <sup>&#176;C</sup> </h1>
                      </div>
                    <div className="flex flex-col gap-[8px]">
                      <p className='text-[12px] font-[400] capitalize text-[#3E3232BF]/75'>Precipitation: 2%</p>
                      <p className='text-[12px] font-[400] capitalize text-[#3E3232BF]/75'>Humidity: 70%</p>
                      <p className='text-[12px] font-[400] capitalize text-[#3E3232BF]/75'>Wind: 3 km/h</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] justify-center items-center">
                    <h2 className='text-[20px] text-black font-[600] leading-normal capitalize'>New York, NY</h2>
                    <p className='text-[14px] font-[400] leading-[20px] text-[#3E3232] capitalize'>Wednesday 04:00</p>
                  </div>
                </div>

    {/* Weather chart here */}
            <WeatherChart/>
                <div className="grid grid-cols-7 gap-[3px]">
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>Tue</span>
                    <FaSun  className='text-[30px] font-[400] leading-normal text-yellow-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>20 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>wed</span>
                    <FaCloudSun  className='text-[30px] font-[400] leading-normal text-yellow-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>18 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>thu</span>
                    <FaCloudBolt   className='text-[30px] font-[400] leading-normal text-gray-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>28 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>fri</span>
                    <BsCloudDrizzleFill  className='text-[30px] font-[400] leading-normal text-gray-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>21 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>sat</span>
                    <FaCloudSun  className='text-[30px] font-[400] leading-normal text-yellow-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>28 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>sun</span>
                    <FaCloudMoon   className='text-[30px] font-[400] leading-normal text-gray-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>20 <sup>&#176;C</sup></span>
                    </div>
                  </div>
                <div className="flex flex-col gap-[15px] items-center rounded-[12px] hover:bg-slate-200 p-[10px] cursor-pointer">
                    <span className='text-[18px] font-[600] leading-normal capitalize'>Mon</span>
                    <FaCloudMeatball  className='text-[30px] font-[400] leading-normal text-gray-300'/>
                    <div className="flex justify-between gap-[8px] w-full">
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                      <span className='text-[12px]'>29 <sup>&#176;C</sup></span>
                    </div>
                  </div>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                <div style={{background:`url(${weatherBg})`, backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="h-[245px] w-full rounded-[12px] overflow-hidden hidden lg:inline">
                    <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center  gap-[40px] p-[25px] bg-gradient-to-r from-red-400/30 to-orange-600/30">
                      <div className="flex w-full justify-between">
                        <div className="inline">
                          <ul>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                       
                          </ul>
                        </div>
                        <div className="inline">
                          <h2 className='text-[20px] font-[500] leading-normal capitalize text-white'>Ankara</h2>
                          <p className='text-[14px] font-[400] leading-[20px] capitalize text-white'>Tuesday 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[16px]">
                      <FaSun className='text-[49px] font-[400] leading-normal text-white'/>
                        <h1 className='text-[49px] font-[400] leading-normal text-white'>32 <sup>&#176;C</sup> </h1>
                      </div>
                    </div>
                </div>
                <div style={{background:`url(${weatherBg})`, backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="h-[245px] w-full rounded-[12px] overflow-hidden hidden lg:inline">
                    <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center  gap-[40px] p-[25px] bg-gradient-to-r from-sky-300/40 to-cyan-600/40">
                      <div className="flex w-full justify-between">
                        <div className="inline">
                          <ul>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                       
                          </ul>
                        </div>
                        <div className="inline">
                          <h2 className='text-[20px] font-[500] leading-normal capitalize text-white'>Alaska</h2>
                          <p className='text-[14px] font-[400] leading-[20px] capitalize text-white'>Tuesday 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[16px]">
                      <FaCloudMeatball  className='text-[49px] font-[400] leading-normal text-white'/>
                        <h1 className='text-[49px] font-[400] leading-normal text-white'>16 <sup>&#176;C</sup> </h1>
                      </div>
                    </div>
                </div>
                <div style={{background:`url(${weatherBg})`, backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="h-[245px] w-full rounded-[12px] overflow-hidden hidden lg:inline">
                    <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center  gap-[40px] p-[25px]  bg-gradient-to-r from-green-300/40 to-green-600/40">
                      <div className="flex w-full justify-between">
                        <div className="inline">
                          <ul>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                       
                          </ul>
                        </div>
                        <div className="inline">
                          <h2 className='text-[20px] font-[500] leading-normal capitalize text-white'>Berlin</h2>
                          <p className='text-[14px] font-[400] leading-[20px] capitalize text-white'>Tuesday 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[16px]">
                      <FaCloudRain  className='text-[49px] font-[400] leading-normal text-white'/>
                        <h1 className='text-[49px] font-[400] leading-normal text-white'>24 <sup>&#176;C</sup> </h1>
                      </div>
                    </div>
                </div>
                <div style={{background:`url(${weatherBg})`, backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:"no-repeat"}} className="h-[245px] w-full rounded-[12px] overflow-hidden">
                    <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center  gap-[40px] p-[25px] bg-gradient-to-r from-violet-300/40 to-indigo-600/40">
                      <div className="flex w-full justify-between">
                        <div className="inline">
                          <ul>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                            <li className='text-[12px] font-[400] leading-normal capitalize text-white'> Precipitation: 0%</li>
                       
                          </ul>
                        </div>
                        <div className="inline">
                          <h2 className='text-[20px] font-[500] leading-normal capitalize text-white'>Ankara</h2>
                          <p className='text-[14px] font-[400] leading-[20px] capitalize text-white'>Tuesday 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-[16px]">
                      <IoCloudyNight  className='text-[49px] font-[400] leading-normal text-white'/>
                        <h1 className='text-[49px] font-[400] leading-normal text-white'>27 <sup>&#176;C</sup> </h1>
                      </div>
                    </div>
                </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
