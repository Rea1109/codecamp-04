import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [page, setPage] = useState(1);

  const { data: boards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { search: searchKeyword, page },
  });

  const { data: best } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_BEST);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, {
    variables: {
      search: searchKeyword,
    },
  });
  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount.fetchBoardsCount / 10)
    : 1;

  const onClickGetBoard = (e: MouseEvent<HTMLDivElement>) =>
    e.currentTarget instanceof Element &&
    router.push(`/boards/${e.currentTarget.id}`);

  const onClickNew = () => router.push(`/boards/new`);
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputKeyword(e.target.value);

  const onClickSearch = () => {
    setSearchKeyword(inputKeyword);
    refetch({ search: searchKeyword });
  };

  const onChangeDate = (dates: any, dateStrings: any) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
    console.log(`시작 날짜 ${startDate} 끝 날짜 ${endDate} `);
  };

  const handleChange = (event: any, value: number) => {
    setPage(Number(value));
    refetch({ page: page });
  };

  return (
    <BoardListUI
      boards={boards}
      best={best}
      lastPage={lastPage}
      onClickGetBoard={onClickGetBoard}
      onClickNew={onClickNew}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearch={onClickSearch}
      onChangeDate={onChangeDate}
      handleChange={handleChange}
    />
  );
}
