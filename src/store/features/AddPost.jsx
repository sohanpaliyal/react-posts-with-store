import React from 'react';
import { addPost } from './postsSlice';
import { useDispatch, useSelector  } from 'react-redux';
import { selectAllUsers } from './usersSlice';

const AddPost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [userId, setUserId] = React.useState('')
    const users = useSelector(selectAllUsers);
    const canSave = Boolean(title) &&  Boolean(content) && Boolean(userId);

    const addNewPost = () => {
        if(canSave){
            
            dispatch(addPost(title, content , userId));
            setContent('')
            setTitle('')
        }
    }
    

    const userOptions = users.map((el)=>(
        <option key={el.id} value={el.id}>
            {el.name}
        </option>
    ))
    return (
    <div className='max-w-[400px]'>
        
        <div className='text-2xl'>Add new post</div>
        
        <div>
            <label htmlFor="Title">Title</label><br />
            <input id="Title" 
               value={title} 
               onChange={(e)=>setTitle(e.target.value)} className='border border-[#000] w-full'/>
        </div>

        <div>
            <label htmlFor="Title">Title</label><br />

            <select 
               value={userId} 
               onChange={(e)=>setUserId(e.target.value)} className='border border-[#000] w-full'>
                <option value=""></option>
                {userOptions}
               </select>
        </div>

        <div>
            <label htmlFor="Content">Content</label><br />
            <textarea id='Content' 
            value={content} 
            onChange={(e)=>setContent(e.target.value)}
            className='border border-[#000] w-full'/>
        </div>

        <button className=' mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
        onClick={()=>addNewPost()}
        disabled={!canSave }>Add Post</button>
    </div>
  )
}

export default AddPost
