import { gql } from "@apollo/client";

export const newsListQuery = gql`
  query NewsList {
    news {
      title
      date
      author
      likes
      uuid
    }
  }
`;

export const newsGetQuery = gql`
  query NewsGet($uuid: String!) {
    singleNews(uuid: $uuid) {
      title
      date
      author
      likes
      uuid
      text
    }
  }
`;

export const newsLikeMutation = gql`
  mutation NewsLike($uuid: String!) {
    like(uuid: $uuid) {
      uuid
    }
  }
`;

export const newsDislikeMutation = gql`
  mutation NewsDislike($uuid: String!) {
    dislike(uuid: $uuid) {
      uuid
    }
  }
`;

export const newsDeleteMutation = gql`
  mutation NewsDelete($uuid: String!) {
    delete(uuid: $uuid) {
      uuid
    }
  }
`;
