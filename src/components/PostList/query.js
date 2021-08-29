import { gql } from "@apollo/client";

export const POST_QUERY = gql`
  query PostQuery {
    getAllPosts {
        id
        title
        description
    }
  }
`;