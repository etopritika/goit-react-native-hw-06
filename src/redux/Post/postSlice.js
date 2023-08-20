import { createSlice } from "@reduxjs/toolkit";
import {
  createPostThunk,
  deletePostThunk,
  getPostsThunk,
  createLike,
  createCommentThunk,
} from "./postOperations";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  comments: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts.push(action.payload);
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.filter(
          (post) => post.id !== action.payload.id
        );
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createCommentThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const postIdToUpdate = action.payload.postId;
        const postToUpdate = state.posts.find(
          (post) => post.id === postIdToUpdate
        );
        if (postToUpdate) {
          postToUpdate.comments.push(action.payload);
        }
      })
      .addCase(createCommentThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const postsReducer = postsSlice.reducer;
