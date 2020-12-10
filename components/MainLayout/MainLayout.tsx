import React from "react";
import { Navigation } from "../Navigation/Navigation";
import styled from "styled-components";

export const LayoutContent = styled.div`
  margin: 0 auto;
  padding: 10px;
`;

export const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Navigation />
      <LayoutContent>{children}</LayoutContent>
    </div>
  );
};
