import React from "react";
import styled from "styled-components";

const StyledLikeButton = styled.span`
  cursor: pointer;
`;

type Props = {
  type?: "like" | "dislike";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export const LikeButton: React.FC<Props> = ({
  type = "like",
  ref,
  ...rest
}) => {
  return (
    <StyledLikeButton {...rest}>
      {type === "like" && <>&#128077;</>}
      {type === "dislike" && <>&#128078;</>}
    </StyledLikeButton>
  );
};
