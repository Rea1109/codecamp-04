import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardGetStylesProps {
  isModal: boolean;
}

export interface IBoardGetUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
