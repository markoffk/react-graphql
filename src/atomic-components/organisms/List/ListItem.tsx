import React from "react";
import styled from "styled-components";

export const ListItem: React.FC = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.li`
  border: 1px solid #eee;
  list-style-type: none;
`;
