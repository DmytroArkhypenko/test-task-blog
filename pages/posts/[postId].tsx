import React, { useState } from 'react';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { IComment } from '../../interfaces/interfaces';
import styled from 'styled-components';
import { RootState, wrapper } from '../../store/store';
import { addComment, getPost } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { NextPage } from 'next';
import Head from 'next/head';

export const Image = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const CommentList = styled.div`
  padding: 20px 10px;
  max-width: 800px;
  margin: 10px auto;
  outline: solid black;
`;

export const Comment = styled.div`
  padding: 20px 10px;
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  outline: none;
  font-size: 100%;
  padding: 0px 10px;
`;

export const Form = styled.form`
  display: flex;
  padding: 10px 0px;
`;

export const PostForm = styled.div`
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  outline: solid black;
`;

export const PostTitle = styled.h1`
  margin-bottom: 20px;
  padding: 20px 0px;
`;

export const PostBody = styled.p`
  text-align: justify;
  font-size: 18px;
  padding: 20px;
  line-height: 28px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px
`;

const Post: NextPage<{ postId: number }> = ({ postId }) => {
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  const sendComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const comment: IComment = {
      postId: Number(postId),
      body: newComment,
    };
    setNewComment('');
    dispatch(addComment(comment));
    
  };

  const onNewCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value)
  }

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout>
      <Head>
        <title>{post.title || 'Untitiled'}</title>
      </Head>
      <PostForm>
        <PostTitle>Title: {post.title}</PostTitle>
        <Image src='../images/post.png' alt='image' />
        <PostBody>Post Content: {post.body}</PostBody>
      </PostForm>
      <CommentList>
        <Text>Comments:</Text>
        <Form onSubmit={event => sendComment(event)}>
          <Input
            value={newComment}
            type='text'
            name='body'
            onChange={event => onNewCommentChange(event)}
            placeholder='Place the comment'
          />
          <Button>Comment</Button>
        </Form>
        {post.comments
          ?.sort((a, b) => b.id - a.id)
          .map((comment: IComment) => (
            <Comment key={comment.id}>
              <p>{comment.body}</p>
            </Comment>
          ))}
      </CommentList>
    </MainLayout>
  );
};

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    await store.dispatch<any>(getPost(query.postId));
    return {
      props: {
        postId: query.postId,
      },
    };
  }
);
