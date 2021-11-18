import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
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

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(0);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => (prev === 1 ? prev : prev - 10));
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div style={{ border: "1px solid black" }}>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, idx) => (
        <span
          key={startPage + idx}
          onClick={onClickPage}
          id={String(startPage + idx)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {startPage + idx}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
