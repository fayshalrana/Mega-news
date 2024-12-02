import React from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import detailBanner from '../../../../public/Images/Post/post3.jpeg'
import detailBanner2 from '../../../../public/Images/Post/post18.jpeg'

const PostDetails = ({ posts }) => {
    const post = posts.slice(0, 1)
    // console.log(post);
    return (
        <div className='w-full rounded-[12px] lg:p-[32px] relative'>
            <div className="w-full z-10 rounded-[12px] lg:bg-[#F5F5F5] h-[600px] lg:h-[300px] absolute top-0 left-0"></div>
            <div className="z-20 relative">
                <div className="">
                    <h1 className=' text-[20px] md:text-[36px] lg:text-[30px] font-[600] lg:font-[400] leading-normal pb-[32px] text-[#000] md:mt-[20px] lg:mt-0'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                    <div className="w-full h-[198px] md:h-[336px] lg:-h-[500px] xl:h-[598px] rounded-[12px] overflow-hidden">
                        <img className='w-full h-full object-cover' src={detailBanner} alt="" />
                    </div>
                    <div className="pt-[30px]">
                        <ul className='flex lg:gap-[50px] xl:gap-[103px] items-center justify-around lg:justify-center'>
                            <li className='text-[14px] font-[500] leading-[20px] capitalize text-gray-500 flex items-center gap-[8px]'><BsCalendarDate />July 14 , 2022</li>
                            <li className='text-[14px] font-[500] leading-[20px] capitalize text-gray-500 flex items-center gap-[8px]'><FaRegCommentDots className='text-[16px]' /><span className='hidden md:inline'>comments :</span> 35</li>
                            <li className='text-[14px] font-[500] leading-[20px] capitalize text-gray-500 flex items-center gap-[8px]'><CiFolderOn className='text-[18px]' /><span className='hidden md:inline'>Category :</span><Link to="#">sport</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[40px]">
                    <h2 className='text-[20px] font-[600] leading-normal capitalize pb-[20px]'>Don’t wait. The purpose of our lives is to be happy!</h2>
                    <p className='text-[18px] lg:text-[15px] font-[400] leading-[34px] lg:leading-[25px] lowercase text-[#3E3232]'>Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the natural wood found throughout the room, creating a relaxing atmosphere within the space.
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</p>
                    <div className="w-full lg:w-[80%] mx-auto my-[40px] h-[161px] md:h-[273px] lg:h-[200px] xl:h-[486px] rounded-[12px] overflow-hidden">
                        <img className='w-full h-full object-cover' src={detailBanner2} alt="" />
                    </div>
                    <h2 className='text-[20px] font-[500] leading-normal capitalize pb-[20px]'>Not how long, but how well you have lived is the main thing.</h2>
                    <p className='text-[18px] lg:text-[15px] font-[400] leading-[34px] lg:leading-[25px] lowercase text-[#3E3232]'>When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
                        Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting, they have options for special packages not available in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance. <br />
                        Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic area available for guests to enjoy.</p>
                </div>
            </div>
           
        </div>
    )
}

export default PostDetails
