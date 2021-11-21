import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query ($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation ($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;
