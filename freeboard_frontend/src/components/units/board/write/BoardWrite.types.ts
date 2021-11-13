import { ChangeEvent } from "react";
import { IQuery} from "../../../../commons/types/generated/types"

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery,'fetchBoard'>;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  addBoard: () => void;
  editBoard: () => void;
  getBoard: () => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContent: string;
  isEdit?: boolean;
  getAddr: () => void;
  onChangeAddr: (e: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  zipcode: string;
  data?: Pick<IQuery,'fetchBoard'>;
}
