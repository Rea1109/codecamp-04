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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    event.target instanceof Element &&
      refetch({ page: Number(event.target.id) });
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          onClick={onClickPage}
          id={String(el)}
          key={el}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {el}
        </span>
      ))}
    </>
  );
}
