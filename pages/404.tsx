import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { MainLayout } from "../components/MainLayout/MainLayout";

const ErrorMsg = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
`;

const Return = styled.div`
  color: #494949 !important;
  margin: 20px auto;
  text-align: center;
  width: 100px;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 10px;
  border: 4px solid #494949 !important;
  border-radius: 10px;
  transition: all 0.4s ease 0s;
  font-size: 14px;
  &:hover {
    color: #ffffff !important;
    background: #c6c6c6;
    border-color: black !important;
    transition: all 0.4s ease 0s;
  }
`;

export const NotFound: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <ErrorMsg>
        <h2>Page not Found</h2>
      </ErrorMsg>
      <Return>
        <Link href="/">
          <a>Return</a>
        </Link>
      </Return>
    </MainLayout>
  );
};

export default NotFound;
