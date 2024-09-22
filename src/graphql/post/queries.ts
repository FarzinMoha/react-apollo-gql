// get post list
import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      body
    }
  }
`;

// get specific post
export const GET_SINGLE_POST = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
      published
      author {
        name
        email
      }
      comments {
        text
        author {
          name
        }
      }
    }
  }
`;

