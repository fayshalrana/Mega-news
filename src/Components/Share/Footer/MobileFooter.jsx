import React from "react";
import { FaRegBookmark, FaUserAlt } from "react-icons/fa";
import { MdHome, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import "./MobileFooter.css";

const MobileFooter = () => {
  const currentPage = useLocation();

  return (
    <div className=" bg-white fixed bottom-0 left-0  z-50 w-full rounded-tr-[12px] rounded-tl-[12px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:hidden">
      <div className="px-[30px] py-[15px]">
        <ul className="flex justify-between gap-[5px] footer">
          <NavLink
            to="/"
            className={`text-[14px] font-[500] leading-[20px] flex items-center gap-[8px] transform duration-200 py-[10px] px-[14px] ${
              currentPage.pathname == "/"
                ? "bg-[#fa506a] text-white rounded-[12px]"
                : ""
            }`}
          >
            <MdHome className="text-[20px]" />
            {currentPage.pathname == "/" ? <span>Home</span> : ""}
          </NavLink>
          <NavLink
            to="/news/details"
            className={`text-[14px] font-[500] leading-[20px] flex items-center gap-[8px] transform duration-200 py-[10px] px-[14px] ${
              currentPage.pathname == "/news/details"
                ? "bg-[#fa506a] text-white rounded-[12px]"
                : ""
            }`}
          >
            <FaRegBookmark />
            {currentPage.pathname == "/news/details" ? <span>Marked</span> : ""}
          </NavLink>
          <NavLink
            to="/writer"
            className={`text-[14px] font-[500] leading-[20px] flex items-center gap-[8px] transform duration-200 py-[10px] px-[14px] ${
              currentPage.pathname == "/writer" ||
              currentPage.pathname == "/profile" ||
              currentPage.pathname == "/profile/send-post/send-video" ||
              currentPage.pathname == "/profile/send-post" ||
              currentPage.pathname == "/edit-profile"
                ? "bg-[#fa506a] text-white rounded-[12px]"
                : ""
            }`}
          >
            <FaUserAlt />
            {currentPage.pathname == "/writer" ||
            currentPage.pathname == "/profile" ||
            currentPage.pathname == "/profile/send-post" ||
            currentPage.pathname == "/profile/send-post/send-video" ||
            currentPage.pathname == "/edit-profile" ? (
              <span>Profile</span>
            ) : (
              ""
            )}
          </NavLink>
          <span className="text-[14px] font-[500] leading-[20px] flex items-center gap-[8px]">
            <MdKeyboardDoubleArrowUp className="text-[20px]" />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default MobileFooter;
