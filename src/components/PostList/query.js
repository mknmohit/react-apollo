import { gql } from "@apollo/client";

export const POSTS_QUERY = gql`
  query PostsQuery($currentPage: Int, $itemsPerPage: Int) {
    getAllPosts(currentPage: $currentPage, itemsPerPage: $itemsPerPage) {
      currentPage
      total
      results {
        id
        title
        description
      }
    }
  }
`;
