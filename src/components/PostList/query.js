import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query PostsQuery {
    getAllPosts {
        id
        title
        description
    }
  }
`;