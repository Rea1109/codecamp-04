import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IUpdateBoardInput {
  writer?: string;
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: IBoardAddress;
}

export interface IBoardWriteUIProps {
  onChangeBoardInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  addBoard: () => void;
  editBoard: () => void;
  getBoard: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContent: string;
  isEdit?: boolean;
  getAddr: () => void;
  onChangeBoardAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMyImage: () => void;
  fileRef: RefObject<HTMLInputElement>;
  myImages: string[];
  boardAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  data?: Pick<IQuery, "fetchBoard">;
}
