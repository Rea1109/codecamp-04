import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Modal } from "antd";

interface ICommentWrite {
  isEdit?: boolean;
  setEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
}

export default function CommentWrite(props: ICommentWrite) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rate, setRate] = useState(0);

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) =>
    setWriter(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeRate = (value: number) => {
    setRate(value);
  };

  const onClickAdd = async () => {
    if (!writer) return Modal.warning({ title: "작성자를 입력해주세요." });
    if (!password) return Modal.warning({ title: "비밀번호를 입력해주세요." });
    if (!contents) return Modal.warning({ title: "내용을 입력해주세요." });
    if (rate === 0) return Modal.warning({ title: "별점을 입력해주세요." });

    try {
      await createComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            contents,
            password,
            writer,
            rating: rate,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
      Modal.success({ title: "댓글이 등록 되었습니다." });
      setWriter("");
      setContents("");
      setPassword("");
      setRate(0);
    } catch (error: any) {
      console.log(error.message);
      Modal.error({ title: "서버에러 관리자에게 문의" });
    }
  };

  const onClickUpdate = async () => {
    interface IUpdateCommentValue {
      contents?: string;
      rating?: number;
    }

    const updateCommentInput: IUpdateCommentValue = {};
    if (!contents && !rate)
      return Modal.warning({ title: "수정된 내용이 없습니다." });
    if (contents !== "") updateCommentInput.contents = contents;
    if (rate !== 0) updateCommentInput.rating = rate;
    console.log(props.el?._id);
    try {
      await updateComment({
        variables: {
          password,
          boardCommentId: props.el._id,
          updateBoardCommentInput: updateCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      Modal.success({ title: "댓글 수정 완료" });
      props.setEdit?.(false);
    } catch (error) {
      error instanceof Error && Modal.error({ title: error?.message });
    }
  };

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRate={onChangeRate}
      onClickAdd={onClickAdd}
      onClickUpdate={onClickUpdate}
      onClickCancle={() => {
        props.setEdit?.(false);
      }}
      rate={rate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
      writer={writer}
      password={password}
    />
  );
}
