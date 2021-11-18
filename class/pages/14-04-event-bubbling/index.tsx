import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationBasciPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: { page: 1 },
    }
  );

  const onClickRow = (event: MouseEvent<HTMLSpanElement>) => {
    // event.target instanceof Element && console.log(event.target.id);
    event.target instanceof Element && console.log(event.currentTarget.id);
  };

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div style={{ border: "1px solid black" }}>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span>{el.title}</span>
            <span> {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
