import React from 'react'
import { Link } from 'react-router-dom'
import Arsenal from '../../../../../public/Images/Match/Arsenal_FC.svg.webp'
import Chelsea from '../../../../../public/Images/Match/Chelsea_FC.webp'
import Liverpool from '../../../../../public/Images/Match/Liverpool_FC.webp'
import Manchester from '../../../../../public/Images/Match/Manchester_City.webp'
import Manchesterunited from '../../../../../public/Images/Match/Manchester_United_FC_crest.webp'
import tottenham from '../../../../../public/Images/Match/tottenham-hotspur.webp'

const ScoreBoard = () => {
    return (
        <div className="flex h-full flex-wrap">
            <div className="w-full max-w-full mx-auto">
                <div className="relative h-full flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white">
                    <div className="h-full flex flex-col min-w-0 break-words bg-clip-border rounded-2xl bg-light/30">

                        <div className="flex-auto block py-[30px] px-[25px] lg:p-[16px]">
                            <div className="overflow-x-auto">
                                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                    <thead className="align-bottom">
                                        <tr className="font-semibold text-[16px] text-[#3E323280]/50 capitalize">
                                            <th className=" pb-[20px] text-start min-w-[192px] font-semibold text-light-inverse text-[16px]">club</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">GP</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">W</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">D</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">L</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">F</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">A</th>
                                            <th className=" pb-[20px] text-center min-w-[30px] font-semibold text-light-inverse text-[16px]">GD</th>
                                            <th className=" pb-[20px] text-end min-w-[30px] font-semibold text-light-inverse text-[16px]">Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>1</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={Manchester} className="w-full h-full object-cover" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Manchester City</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">38</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    29 </span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-300/30 rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>2</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={Liverpool} className="w-full h-full object-cover" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Liverpool</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">8</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    2 </span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">98</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">78</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">5</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">9</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">19</span>
                                            </td>
                                        </tr>
                                        <tr className=" rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>3</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={Chelsea} className="w-full h-full object-cover" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Chelsea</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">18</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    3</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">24</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">48</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">14</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">89</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">43</span>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-300/30 rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>4</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={tottenham} className="w-full h-full object-cover" alt="" /></Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Tottenham Hotspur</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">38</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    29 </span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                        </tr>
                                        <tr className="rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>5</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={Arsenal} className="w-full h-full object-cover" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Arsenal</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">38</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    29 </span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-300/30 rounded-[12px] hover:bg-gray-300 cursor-pointer">
                                            <td className="py-[10px] pl-[10px]">
                                                <div className="flex items-center gap-[9px]">
                                                    <span className='text-[16px] lg:text-[11px] font-[400]'>6</span>
                                                    <div className="h-[24px] w-[24px] rounded-[6px] overflow-hidden">
                                                        <Link to="#">
                                                            <img src={Manchesterunited} className="w-full h-full object-cover" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col justify-start">
                                                        <Link className="font-semibold transition-colors duration-200 ease-in-out text-[16px] lg:text-[11px] text-secondary-inverse hover:text-primary"> Manchester United</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-[16px] lg:text-[11px]">38</span>
                                            </td>
                                            <td className="py-[10px]  text-center">
                                                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg lg:text-[11px]">
                                                    29 </span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="text-center align-baseline inline-flex mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg lg:text-[11px]">86</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] text-center">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                            <td className="py-[10px] pr-[10px] text-end">
                                                <span className="font-semibold text-light-inverse text-md/normal lg:text-[11px]">58</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard
