import React from 'react'
import NewPostItem from '../NewPost/NewPostItem'

const VideoSliderItem = ({posts}) => {
  
  return (
    <div className='grid grid-cols-2 gap-[24px]'>
      {
        posts.map(post=> <NewPostItem key={post.id} post={post}></NewPostItem>)
      }
    </div>
  )
}

export default VideoSliderItem
