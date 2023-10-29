import {createSlice , nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
    { id : nanoid(), title : 'learning the redux' , content : `I've heard good thing`,
    date : sub(new Date() ,{minutes :  10 }).toISOString()
    , reactions:
        {
            thumbs : 0,
            smiley : 0,
            heart : 0
        }
    },
        { id : nanoid(), title : 'Slices...' , content : `The more i slice`
        , 
        date : sub(new Date() ,{minutes :  10 }).toISOString()
        , reactions:
        {
            thumbs : 0,
            smiley : 0,
            heart : 0
        }
    }
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        addPost :{
            reducer:(state,action)=>{
                state.push(action.payload)
            },
            prepare:(title,content,userId)=>{
                return {
                    payload:{
                        date : sub(new Date(), {minutes :0}).toISOString(),reactions:{
                            thumbs : 0,
                            smiley : 0,
                            heart : 0
                        },
                        id : nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        },
        incrementReaction : (state, action)=>{
            const { postId , emoji } = action.payload;         
            const existingPost = state.find((ele)=> (ele.id === postId))        
            if(existingPost){            
                existingPost.reactions[emoji]++              
            }
        }
    }
})

export const selectAllPosts = (state) =>state.posts;

export const { addPost, incrementReaction} = postsSlice.actions;
export default postsSlice.reducer;