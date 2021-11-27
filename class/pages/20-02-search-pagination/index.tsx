import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuid } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function SearchPaginationPage() {
  const [mySearch, setMySearch] = useState<string>("");
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const onClickSearch = () => {
    refetch({
      search: mySearch,
      page: 1,
    });
    setMyKeyword(mySearch);
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setMySearch(event.target.value);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    event.target instanceof Element &&
      refetch({ search: myKeyword, page: Number(event.target.id) });
  };
  return (
    <>
      <h1>검색 페이지</h1>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title}</span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, idx) => (
        <span
          style={{ margin: "20px" }}
          key={uuid()}
          onClick={onClickPage}
          id={String(idx + 1)}
        >
          {idx + 1}
        </span>
      ))}
    </>
  );
}
