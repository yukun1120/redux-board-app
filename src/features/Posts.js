import { createSlice } from '@reduxjs/toolkit';
import { PostsData } from '../DummyData';

const postsSlice = createSlice({
  name: 'posts',
  initialState: { value: PostsData },// デフォルトのデータを設定
  reducers: {
    addPosts: (state, action) => { //action creater
      state.value.push(action.payload);
    },
    deletePosts: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPosts, deletePosts } = postsSlice.actions;
export default postsSlice.reducer;
