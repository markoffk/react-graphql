import React from "react";
import { News } from "../../types/api/news";
import { Link } from "react-router-dom";

type Props = Pick<News, "uuid" | "title" | "date" | "author" | "likes">;

export const NewsListItem: React.FC<Props> = ({
  uuid,
  title,
  date,
  author,
  likes,
}) => {
  return (
    <div>
      <p>
        {date}, {author}, likes: {likes}
      </p>
      <p>
        <Link to={`/news/${uuid}`}>{title}</Link>
      </p>
    </div>
  );
};
