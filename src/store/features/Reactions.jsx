import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementReaction } from './postsSlice';

const Reactions = ({post}) => {
    const dispatch = useDispatch();

        const handleReactionClick = (emoji) =>{
            const payload = {postId : post.id , emoji}
            dispatch(incrementReaction(payload))
        }

        const reactions = {heart : '❤️', thumbs : '👍' , smiley: '😄' }
  return (
    <div className="mt-2">
        {
            Object.entries(reactions).map(([key ,value])=>(
                <div key={key} className='inline-block'>
         
                <span className='me-2'>{post.reactions[key]}</span> 
                
                <button
                   className='me-3 hover:scale-150'
                   
                   onClick={() => handleReactionClick(key)}
                 >
                   {value}
                 </button>
                 
                 </div>
            ))
        }
        {/* {post.reactions.map((reaction, index) => (
        
        ))} */}
      </div>
  )
}

export default Reactions
