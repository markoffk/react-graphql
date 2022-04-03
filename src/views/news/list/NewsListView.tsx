import React from "react";
import { useQuery } from "@apollo/client";
import { List } from "../../../atomic-components/organisms/List/List";
import { NewsListItem } from "../../../components/News/NewsListItem";
import { News } from "../../../types/api/news";
import { newsListQuery } from "../../../gql/news";

export const NewsListView = () => {
  const { loading, error, data } = useQuery<{ news: News[] }>(newsListQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List>
      {(data?.news || []).map(({ uuid, title, date, author, likes }) => (
        <List.Item key={uuid}>
          <NewsListItem
            uuid={uuid}
            title={title}
            date={date}
            author={author}
            likes={likes}
          />
        </List.Item>
      ))}
    </List>
  );
};
