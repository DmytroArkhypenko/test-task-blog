import axios from 'axios';
import { IComment, IPost } from '../interfaces/interfaces';

const api = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

export const fetchAllPosts = async (): Promise<IPost[]> => {
  const { data } = await api.get('posts/');
  return data;
};

export const fetchPost = async (postId: string | string[]): Promise<IPost> => {
  const { data } = await api.get(`posts/${postId}`, {
    params: {
      _embed: 'comments',
    },
  });
  return data;
};

export const createPost = async (post: IPost): Promise<IPost> => {
  const { data } = await api.post('posts/', post);
  return data;
};

export const createComment = async (comment: IComment): Promise<IComment> => {
  const { data } = await api.post('comments/', comment);
  return data;
};

export const deletePostReq = async (id: string | string[]): Promise<void> => {
  await api.delete(`posts/${id}`);
};
