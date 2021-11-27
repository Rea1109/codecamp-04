import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function SearchPage() {
  const [mySearch, setMySearch] = useState<string>("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      search: mySearch,
    },
  });
  const onClickSearch = () => {
    refetch({
      search: mySearch,
    });
  };
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setMySearch(event.target.value);
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
    </>
  );
}
