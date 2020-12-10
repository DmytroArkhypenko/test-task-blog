import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { IPost } from '../interfaces/interfaces';
import { deletePost, getPosts } from '../store/actions/actions';
import { RootState, wrapper } from '../store/store';
import styled from 'styled-components';
import { Button } from '../components/Button/Button';
import Head from 'next/head';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch<any>(getPosts());
  }
);

export const Title = styled.h1`
  height: 20%;
  padding: 20px 0;
  text-align: center;
  outline: solid black;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column; 
  float: left;
`;

export const ThePost = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  display: flex;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const PostContent = styled.div`
  position: relative;  
  padding-left: 20px;
  width: 75%;
`;

export const PostTitle = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const PostImage = styled.img`
  display: block;
  width: 25%;
  border-radius: 5px;
`;

export const PostDetails = styled.a`
margin-right: 20px;
color: #494949 !important;
text-transform: uppercase;
text-decoration: none;
background: #ffffff;
padding: 10px;
border: 4px solid #494949 !important;
border-radius: 10px;
display: inline-block;
transition: all 0.4s ease 0s;
font-size: 14px;
&:hover {
  color: #ffffff !important;
  background: #c6c6c6;
  border-color: black !important;
  transition: all 0.4s ease 0s;
  }
`;

export const PostActionBar = styled.div`
  height: 30%;
  position:absolute;
  right: 20px;
  bottom: 10px;
  margin-right: 10px;
  padding: 10px 0;
  align-items: center;
`;

export const PostBody = styled.p`
  height: 50%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export default function Home() {
  const { items } = useSelector(({ posts }: RootState) => posts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
  };

  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <Title>Latest Posts</Title>
      <PostList>
        {items
          ?.sort((b, a) => a.id - b.id)
          .map((post: IPost) => (
            <ThePost key={post.id + post.title}>
              <PostImage src='images/post.png' alt='image' />
              <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
              <PostActionBar>
                <Link
                  href='/posts/[postId]'
                  as={`/posts/${post.id}`}
                  key={post.id + post.title}
                >
                  <PostDetails>Details</PostDetails>
                </Link>
                <Button
                  handleClick={() => handleDelete(String(post.id))}
                >
                  Remove Post
                </Button>
              </PostActionBar>
              </PostContent>
            </ThePost>
          ))}
      </PostList>
    </MainLayout>
  );
}
