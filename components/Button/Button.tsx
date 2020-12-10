import React from "react";
import styled from "styled-components";

type ButtonProps = {
  handleClick?: (data: any) => void;
  children: string;
};

export const TheButton = styled.button`
  color: #494949 !important;
  margin: 10px;
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

export const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return (
    <TheButton type="submit" onClick={handleClick}>
      {children}
    </TheButton>
  );
};
