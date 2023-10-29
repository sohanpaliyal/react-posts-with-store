import React from 'react'
import {  useSelector } from 'react-redux'
import Reactions from './Reactions';
import TimeAgo from './TimeAgo';
import PostAuthor from './PostAuthor';
import { selectAllPosts } from './postsSlice';


const Posts = () => {
    const posts =  useSelector(selectAllPosts);
    console.log(posts)
  return (
    <div >
        <div className='text-2xl mt-10'>Recent Posts</div>
      {
        posts.map((el)=>{
            return <div className='bg-[#0049B7] p-5 my-2 text-[#fff]' key={el.title}>
                <div>
                    <span className='text-xl'>Title :</span>   {el.title}
                </div>
                <div >
                    <span className='text-xl'>Content : </span> {el.content}
                </div>
                <PostAuthor authorId={el.userId}/>
                <div>
                    <TimeAgo timestamp={el.date}/>
                </div>
                <Reactions post={el}/>
            </div>
        })
      }
    </div>
  )
}

export default Posts;
