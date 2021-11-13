import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_BEST } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");

  const { data: boards, refetch } = useQuery<Pick<IQuery,'fetchBoards'>,IQueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: { search: searchKeyword },
  });

  const { data: best } = useQuery<Pick<IQuery,'fetchBoardsOfTheBest'>>(FETCH_BOARDS_BEST);

  const onClickGetBoard = (e: MouseEvent<HTMLDivElement>) =>
    router.push(`/boards/${e.target.id}`);
  const onClickNew = () => router.push(`/boards/new`);
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputKeyword(e.target.value);
  };

  const onClickSearch = () => {
    setSearchKeyword(inputKeyword);
    refetch({ search: searchKeyword });
  };

  return (
    <BoardListUI
      boards={boards}
      best={best}
      onClickGetBoard={onClickGetBoard}
      onClickNew={onClickNew}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearch={onClickSearch}
    />
  );
}
