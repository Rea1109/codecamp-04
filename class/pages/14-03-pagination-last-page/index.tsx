import { gql, useQuery } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationLastPage() {
  // const [startPage, setStartPage] = useState(1);
  const [page, setPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page },
  });

  const { data: dataBoardCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount.fetchBoardsCount / 10)
    : 1;

  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   if (event.target instanceof Element)
  //     refetch({ page: Number(event.target.id) });
  // };

  // const onClickPrevPage = () => {
  //   if (startPage <= 1) return;
  //   setStartPage((prev) => prev - 10);
  // };

  // const onClickNextPage = () => {
  //   if (startPage + 10 > lastPage) return;
  //   setStartPage((prev) => prev + 10);
  // };

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(Number(value));
    refetch({ page: page });
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
      {/* <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, idx) =>
          startPage + idx <= lastPage && (
            <span
              key={startPage + idx}
              onClick={onClickPage}
              id={String(startPage + idx)}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              {startPage + idx}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span> */}
      <Stack spacing={2}>
        <Pagination
          count={lastPage}
          color="secondary"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
