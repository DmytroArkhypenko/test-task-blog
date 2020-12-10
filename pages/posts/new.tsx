import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MainLayout } from "../../components/MainLayout/MainLayout";
import { addNewPost } from "../../store/actions/actions";
import { useRouter } from "next/router";
import { Button } from "../../components/Button/Button";
import styled from "styled-components";
import Head from "next/head";

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 100%;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  min-height: 200px;
  resize: none;
  padding: 20px;
  font-size: 14px;
  font-family: "Montserrat";
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.h1`
  outline: solid black;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NewPost: React.FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      title: title,
      body: body,
      id: Date.now(),
      comments: [],
    };
    dispatch(addNewPost(data));
    setTitle("");
    setBody("");
    router.push("/");
  };

  return (
    <MainLayout>
      <Head>
        <title>Create new post</title>
      </Head>
      <div>
        <Title>Create New Post</Title>
        <form onSubmit={(event) => onSubmit(event)}>
          <label htmlFor="title">Title</label>
          <Input
            onChange={(event) => onTitleChange(event)}
            name="title"
            placeholder="Enter post title"
          />
          <label htmlFor="body">Post Body</label>
          <Textarea
            onChange={(event) => onBodyChange(event)}
            name="body"
            placeholder="Enter post body"
          ></Textarea>
          <Button>Create</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewPost;
