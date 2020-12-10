import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store/store";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export enum Types {
  SET_POSTS = "SET_POSTS",
  ADD_POSTS = "ADD_POSTS",
  SET_POST = "SET_POST",
  SET_COMMENT = "SET_COMMENT",
  DELETE_POST = "DELETE_POST",
}

export interface IPost {
  title: string;
  body: string;
  id: number;
  comments: IComment[];
}

export interface IPostState {
  post: IPost;
}

export interface IPostsState {
  items: IPost[];
}

export interface IComment {
  body: string;
  id?: number;
  postId: number;
}

export interface ISetPostsAction {
  type: typeof Types.SET_POSTS;
  payload: IPost[];
}

export interface IAddPostAction {
  type: typeof Types.ADD_POSTS;
  payload: IPost;
}

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload: any;
}

export interface ISetPostAction {
  type: typeof Types.SET_POST;
  payload: IPost;
}

export interface ISetCommentAction {
  type: typeof Types.SET_COMMENT;
  payload: IComment;
}

export interface IDeletePostAction {
  type: typeof Types.DELETE_POST;
  id: string | string[];
}

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ActionTypes =
  | ISetPostAction
  | IAddPostAction
  | IHydrateAction
  | ISetPostsAction
  | ISetCommentAction
  | IDeletePostAction;
