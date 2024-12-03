import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import bar from "../../../../public/Images/social/bar.webp";
import boxer from "../../../../public/Images/social/boxer.webp";
import cpl from "../../../../public/Images/social/capul.webp";
import car from "../../../../public/Images/social/car.webp";
import Dog from "../../../../public/Images/social/dog.webp";
import headphone from "../../../../public/Images/social/headphone.webp";
import hotDog from "../../../../public/Images/social/hotDog.webp";
import light from "../../../../public/Images/social/light.webp";
import pet from "../../../../public/Images/social/pet.webp";
import MobileFooter from "./MobileFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative bottom-0 bg-gradient-to-r from-[#F5F5F5] to-white mt-[70px] hidden md:block">
        <div className="container mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-[24px] bg-white p-0">
          <div className="rounded-tr-[50px] rounded-br-[50px] py-[40px] bg-[#f5f5f5f5] md:pr-[50px] lg:pr-[20px] xl:pr-[50px]  md:pl-[1rem]">
            <div className="flex xl:gap-[40px] justify-between  md:gp-[55px] lg:gap-[40px]">
              <div className="w-[60%]">
                <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%]'>
                  mega news
                </h3>

                <p className="pt-[20px] pr-[50px] md:pr-[18px] lg:pr-[10px] text-justify lg:pb-[12px] pb-[30px] text-[14px]  lg:text-[12px] xl:text-[14px] tracking-[.25px] font-[400] leading-[22px] text-[#3E3232BF]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                  congue mauris rhoncus aenean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin
                </p>
                <div className="">
                  <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%]'>
                    Newsletters
                  </h3>
                  <form className="px-[8px] bg-white rounded-[12px] flex justify-between items-center mt-[20px] mb-[30px]">
                    <input
                      className="focus:ring-0 focus-visible:outline-none w-full border-none"
                      type="text"
                      placeholder="Write your Email..."
                      required
                    />
                    <button type="submit">
                      <IoMail className="text-[20px] text-[#3E3232BF] cursor-pointer" />
                    </button>
                  </form>
                </div>
              </div>

              {/* comment */}
              <div className="">
                <div className="">
                  <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>
                    Categories
                  </h3>
                  <ul className="flex flex-col gap-[13px] xl:gap-[9px] pb-[30px]">
                    <Link to="/culture" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232] cursor-pointer">
                      Culture
                    </Link>
                    <Link to="/fashion" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232] cursor-pointer">
                      Fashion
                    </Link>
                    <Link to="/featured" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232] cursor-pointer">
                      Featured
                    </Link>
                    <Link to="/food" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232] cursor-pointer">
                      Food
                    </Link>
                    <Link to="/Healthy-living" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232] cursor-pointer">
                      Healthy Living
                    </Link>
                    <Link to="/technology" className="text-[12px] font-[400] leading-normal capitalize text-[#3E3232]">
                      Technology
                    </Link>
                  </ul>
                </div>
                <div className="lg:mt-[50px] xl:mt-0">
                  <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>
                    Categories
                  </h3>
                  <div className="flex items-center gap-[15px]">
                    <Link to='#' className="flex items-center gap-[8px] rounded-[12px] py-[10px] pl-[16px] pr-[24px] bg-gradient-to-r from-red-500  to-rose-400 text-[16px] lg:text-[12px] font-[500] leading-[20px] text-white  h-[40px]">
                      <FaInstagram />
                      Instagram
                    </Link>
                    <Link to='#' className="rounded-[12px] p-[8px] bg-gradient-to-r from-cyan-500 to-blue-500 text-[16px] w-[40px] h-[40px] flex justify-center items-center font-[500] leading-[20px] text-white">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[100px] bg-[#3E3232BF]/20 py-[8px] px-2 rounded-tr-[10px] rounded-br-[10px]">
              <span className="text-[12px] font-[400] text-[#3E3232BF]/75 capitalize leading-normal">
                privacy policy | terms & conditions
              </span>
              <span className="text-[12px] font-[400] text-[#3E3232BF]/75 capitalize leading-normal">
                all copyright (c) 2024 reserved
              </span>
            </div>
          </div>
          <div className="bg-white py-[40px] md:hidden lg:grid grid-cols-2 gap-[24px]">
            <div className="">
              <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>
                new Comments
              </h3>
              <div className="flex flex-col gap-[8px]">
                <div className="p-[16px] rounded-[12px] bg-[#F5F5F5]">
                  <h3 className="text-[16px] lg:text-[15px] font-[600] leading-normal">
                    ellsmartx
                  </h3>
                  <p className="text-[12px] font-[400] leading-normal text-[#3E3232BF]/75 capitalize">
                    how nice does this look 😍 I feel it should be delicious,
                    thank you
                  </p>
                </div>
                <div className="p-[16px]  rounded-[12px] bg-[#F5F5F5]">
                  <h3 className="text-[16px] lg:text-[15px] font-[600] leading-normal">
                    cassia
                  </h3>
                  <p className="text-[12px] font-[400] leading-normal text-[#3E3232BF]/75 capitalize">
                    Take a rest, i'll be cheer up you again in 2 next game go go
                    go
                  </p>
                </div>
                <div className="p-[16px]  rounded-[12px] bg-[#F5F5F5]">
                  <h3 className="text-[16px] lg:text-[15px] font-[600] leading-normal">
                    amanda
                  </h3>
                  <p className="text-[12px] font-[400] leading-normal text-[#3E3232BF]/75 capitalize">
                    you were stunning today, jan! 💗 great match 👍🏽👍🏽
                  </p>
                </div>
                <div className="p-[16px]  rounded-[12px] bg-[#F5F5F5]">
                  <h3 className="text-[16px] lg:text-[15px] font-[600] leading-normal">
                    Denis Simonassi
                  </h3>
                  <p className="text-[12px] font-[400] leading-normal text-[#3E3232BF]/75 capitalize">
                    It was a great match today Janzi! You did great😉🇩🇪
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className='relative capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[20px]'>
                Follow on Instagram
              </h3>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-[8px] 2xl:gap-[24px]">
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={pet}
                      alt=""
                    /></Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram"><img
                    className="w-full h-full object-cover"
                    src={light}
                    alt=""
                  /></Link>

                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={bar}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={cpl}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={boxer}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={car}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={headphone}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={hotDog}
                      alt=""
                    />

                  </Link>
                </div>
                <div className="rounded-[12px] overflow-hidden lg:w-full lg:h-[70px] xl:h-[122px] 2xl:h-[100px]">
                  <Link to="/instagram">
                    <img
                      className="w-full h-full object-cover"
                      src={Dog}
                      alt=""
                    />

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default Footer;
