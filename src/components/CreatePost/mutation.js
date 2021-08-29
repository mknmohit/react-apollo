import { gql } from "@apollo/client";

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $description: String!) {
    addNewPost(title: $title, description: $description) {
      id
    }
  }
`;