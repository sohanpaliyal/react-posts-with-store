import React from 'react'
import { useSelector } from 'react-redux'

const PostAuthor = ({authorId}) => {
    const users = useSelector((state)=>state.users);
    let user = null;
   
    if(authorId)
    user = users.find((el)=>el.id ===   authorId).name;
    return (
    <div>
      Posted By : <em>{ user ?? 'Unknown Author' }</em>
    </div>
  )
}

export default PostAuthor
