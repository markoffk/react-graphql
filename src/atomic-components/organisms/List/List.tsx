import React from "react";
import { ListItem } from "./ListItem";
import styled from "styled-components";

type StaticProps = {
  Item: typeof ListItem;
};

export const List: React.FC & StaticProps = ({ children }) => {
  return <Root>{children}</Root>;
};

List.Item = ListItem;

const Root = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
