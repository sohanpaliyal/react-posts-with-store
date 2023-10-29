import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './features/postsSlice'
import usersSlice from "./features/usersSlice";


const store  = configureStore({
    reducer:{
        posts : postsSlice,
        users : usersSlice
    }
})

export default store;