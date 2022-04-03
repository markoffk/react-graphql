import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { News } from "../../../types/api/news";
import { Link, useParams } from "react-router-dom";
import { LikeButton } from "../../../atomic-components/atoms/buttons/LikeButton";
import {
  newsDeleteMutation,
  newsDislikeMutation,
  newsGetQuery,
  newsLikeMutation,
} from "../../../gql/news";

export const NewsDetailView = () => {
  const { uuid } = useParams();

  const newsGetQueryHandler = useQuery<{ singleNews: News }>(newsGetQuery, {
    variables: { uuid },
  });

  const [mutateNewsLike] = useMutation(newsLikeMutation);
  const [mutateNewsDislike] = useMutation(newsDislikeMutation);
  const [mutateNewsDelete] = useMutation(newsDeleteMutation);

  const newsLike = async () => {
    await mutateNewsLike({ variables: { uuid } });
    await newsGetQueryHandler.refetch();
  };
  const newsDislike = async () => {
    await mutateNewsDislike({ variables: { uuid } });
    await newsGetQueryHandler.refetch();
  };
  const newsDelete = async () => {
    await mutateNewsDelete({ variables: { uuid } });
    window.location.pathname = "/news";
  };

  if (newsGetQueryHandler.loading) return <p>Loading...</p>;
  if (newsGetQueryHandler.error) return <p>Error :(</p>;

  const singleNews = newsGetQueryHandler.data?.singleNews;

  return (
    <div>
      <Link to="/news">News</Link>
      <h2>{singleNews?.title}</h2>
      <p>{singleNews?.text}</p>
      <p>
        <LikeButton type="like" onClick={newsLike} />
        {singleNews?.likes}
        <LikeButton type="dislike" onClick={newsDislike} />
      </p>
      <p>
        <button type="button" onClick={newsDelete}>
          delete
        </button>
      </p>
    </div>
  );
};
