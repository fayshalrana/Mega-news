import React from 'react'
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
const BookMark = ({marked}) => {
  return (
    <span>
      {
        marked?  <FaBookmark/> : <FaRegBookmark />
      }
    </span>
  )
}

export default BookMark
