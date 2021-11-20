import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  boards?: Pick<IQuery, "fetchBoards">;
  best?: Pick<IQuery, "fetchBoardsOfTheBest">;
  lastPage: number;
  onClickGetBoard: (e: MouseEvent<HTMLDivElement>) => void;
  onClickNew: () => void;
  onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
  onChangeDate: (dates: any, dateStrings: any) => void;
  handleChange: (event: any, value: number) => void;
  onLoadMore: () => void;
}
