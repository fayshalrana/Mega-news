import React, { useContext } from 'react'
import PostDetails from './PostDetails'
import SideBar from './SideBar'
import { postContext } from '../../../../utils/Posts/PostsProvider'
import RelatedPost from './RelatedPost/RelatedPost'
import Comments from './Comments';
import AddComment from './AddComment';
const SinglePost = () => {
    const { posts } = useContext(postContext)
    return (
        <div className="mt-[0px] lg:mt-[50px] pb-[4rem] md:pb-0">
            <div className='container mx-auto flex flex-col lg:flex lg:flex-row xl:flex 2xl:grid grid-cols-4 gap-[24px]'>
                <div className="col-span-3">
                    <PostDetails posts={posts} />
                    <Comments />
                    <AddComment />
                </div>
                <div className="xl-w[20%]">
                    <SideBar />
                </div>
            </div>
            <RelatedPost />
        </div>
    )
}

export default SinglePost
