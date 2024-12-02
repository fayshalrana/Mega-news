import React, { createContext } from 'react'
export const postContext = createContext(null)
import banner1 from '../../public/Images/Banner/banner1.webp'
import banner2 from '../../public/Images/Banner/banner2.webp'
import { posts } from '../../src/Data/Post'
const PostsProvider = ({ children }) => {


  const bannerData = [
    {
      id: 1,
      backgroundImage: banner1,
      title: 'How to Drive a Car Safely',
      subtitle: 'Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.'
    },
    {
      id: 2,
      backgroundImage: banner2,
      title: 'How to Make Dance Music',
      subtitle: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
    },
    {
      id: 3,
      backgroundImage: banner2,
      title: 'How to Make Dance Music',
      subtitle: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
    },
    {
      id: 4,
      backgroundImage: banner2,
      title: 'How to Make Dance Music',
      subtitle: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
    },
    {
      id: 5,
      backgroundImage: banner2,
      title: 'How to Make Dance Music',
      subtitle: "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users."
    },
  ];
  const data = {
    posts,
    bannerData
  }


  return (
    <postContext.Provider value={data}>
      {children}
    </postContext.Provider>
  )
}

export default PostsProvider
