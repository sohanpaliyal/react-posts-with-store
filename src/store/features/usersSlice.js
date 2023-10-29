import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id : nanoid() , name : 'Sohan Paliyal'},
    {id : nanoid() , name : 'Umesh Paliyal'},
    {id : nanoid() , name : 'Yogesh Paliyal'},
    {id : nanoid() , name : 'Dinesh Paliyal'},
    {id : nanoid() , name : 'Bhagirath Paliyal'}
]
const postsSlice = createSlice({
    initialState,
    name :'users',
    reducer:{

    }
})

export const selectAllUsers = (state) =>state.users;


export default postsSlice.reducer;