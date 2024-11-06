import { createSlice } from '@reduxjs/toolkit';
import { PostsData } from '../DummyData';
const postsSlice = createSlice({
  name: 'posts',
  initialState: { value: PostsData},// デフォルトのデータを設定
  reducers: {
    addPosts: (state, action) => { //action creater
      state.value.push(action.payload);
    },
  },
});

export default postsSlice.reducer;