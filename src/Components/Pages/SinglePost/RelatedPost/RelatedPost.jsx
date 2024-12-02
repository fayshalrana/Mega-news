import React from 'react'
import RelatedSlider from './RelatedSlider'

const RelatedPost = () => {
    return (
        <div className='container mx-auto overflow-hidden pt-[60px] md:pb-[20px]'>
            <h2 className='relative  ml-[10px] capitalize text-[20px] font-[600] before:content-[""] before:absolute before:h-[10px] before:rounded-[12px] before:w-[4px] before:bg-[#F81539] before:-left-[8px] before:top-[50%] before:transform before:translate-y-[-50%] mb-[30px] mt-[20px]'>Related posts</h2>

            <div className="related">
                <RelatedSlider />
            </div>
        </div>
    )
}

export default RelatedPost
