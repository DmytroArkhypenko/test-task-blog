import {
  IComment,
  ISetCommentAction,
  IDeletePostAction,
} from "./../../interfaces/interfaces";
import {
  createPost,
  fetchAllPosts,
  fetchPost,
  createComment,
  deletePostReq,
} from "./../../api/api";
import {
  IAddPostAction,
  IPost,
  ISetPostAction,
  ISetPostsAction,
  Thunk,
  Types,
} from "../../interfaces/interfaces";

export const setPosts = (payload: IPost[]): ISetPostsAction => ({
  type: Types.SET_POSTS,
  payload,
});

export const setNewPost = (payload: IPost): IAddPostAction => ({
  type: Types.ADD_POSTS,
  payload,
});

export const getPosts = (): Thunk => async (dispatch) => {
  const posts = await fetchAllPosts();
  dispatch(setPosts(posts));
};

export const addNewPost = (post: IPost): Thunk => async (dispatch) => {
  const newPost = await createPost(post);
  dispatch(setNewPost(newPost));
};

const setPost = (payload: IPost): ISetPostAction => ({
  type: Types.SET_POST,
  payload,
});

export const getPost = (postId: string | string[]): Thunk => async (
  dispatch
) => {
  const post = await fetchPost(postId);
  dispatch(setPost(post));
};

const setComment = (payload: IComment): ISetCommentAction => ({
  type: Types.SET_COMMENT,
  payload,
});

export const addComment = (newComment: IComment): Thunk => async (dispatch) => {
  const comment = await createComment(newComment);
  dispatch(setComment(comment));
};

const removePost = (id: string | string[]): IDeletePostAction => ({
  type: Types.DELETE_POST,
  id,
});

export const deletePost = (id: string | string[]): Thunk => async (
  dispatch
) => {
  await deletePostReq(id);
  dispatch(removePost(id));
};
