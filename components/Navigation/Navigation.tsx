import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavBar = styled.div`
  background-color: black;
  padding: 15px 20px;
  width: 100%;
  color: white;
`;

export const NavItem = styled.a`
  margin: 0px 50px;
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 10px;
  border: 4px solid black;
  border-radius: 10px;
  display: inline-block;
  transition: all 0.4s ease 0s;
  font-size: 18px;
  &:hover {
    color: #ffffff !important;
    background: #c6c6c6;
    transition: all 0.4s ease 0s;
  }
`;

export const Navigation: React.FunctionComponent = () => {
  return (
    <NavBar>
      <Menu>
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/posts/new">
          <NavItem>Create new post</NavItem>
        </Link>
      </Menu>
    </NavBar>
  );
};
