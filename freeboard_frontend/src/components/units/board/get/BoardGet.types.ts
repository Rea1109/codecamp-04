import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardGetStylesProps {
  isModal: boolean;
}

export interface IBoardGetUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isModal: boolean;
  onClickList: () => void;
  onClickUpdate: () => void;
  onClickDelete: (e: MouseEvent<HTMLInputElement>) => void;
  onClickLike: (e: MouseEvent) => void;
  onClickDislike: (e: MouseEvent) => void;
  onModal: () => void;
}
