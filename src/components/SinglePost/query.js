import { gql } from "@apollo/client";

export const SINGLE_POST_QUERY = gql`
  query SinglePostQuery($postId: ID!) {
    getSinglePost(id: $postId) {
        id
        title
        description
    }
  }
`;