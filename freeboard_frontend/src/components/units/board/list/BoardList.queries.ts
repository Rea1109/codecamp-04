import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $startDate: DateTime, $endDate: DateTime) {
    fetchBoards(search: $search, startDate: $startDate, endDate: $endDate) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const FETCH_BOARDS_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      createdAt
      likeCount
    }
  }
`;
