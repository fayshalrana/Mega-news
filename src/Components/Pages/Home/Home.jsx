import React from 'react'
import Category from './Category/Category'
import Banner from './Banner/Banner'
import Post from './Post/Post'
import Score from './Score/Score'
import NewPost from './NewPost/NewPost'
import LatestVideo from './LatestVideo/LatestVideo'
import TrandyPosts from './TrandyPosts/TrandyPosts'
import Weather from './Weather/Weather'

const Home = () => {
  return (
    <>
      <Category/>
      <Banner/>
      <Post/>
      <Score/>
      <NewPost/>
      <LatestVideo/>
      <TrandyPosts/>
      <Weather/>
      <TrandyPosts/>
    </>
  )
}

export default Home
