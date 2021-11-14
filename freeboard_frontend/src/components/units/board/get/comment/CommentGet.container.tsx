import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import CommentGetUI from "./CommentGet.presenter";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentGet.queries";

export default function CommentPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [textCount, setTextCount] = useState(0);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

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
    setTextCount(event.target.value.length);
  };

  const addComment = async () => {
    if (!writer) return alert("작성자를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    if (!contents) return alert("댓글을 작성해주세요.");
    if (textCount > 50) return alert("댓글내용은 최대 50글자 입니다.");

    try {
      await createComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            contents,
            password,
            writer,
            rating: 5,
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
      alert("댓글이 등록 되었습니다.");
      setWriter("");
      setPassword("");
      setContents("");
      setTextCount(0);
    } catch (error: any) {
      console.log(error.message);
      alert("서버에러 관리자에게 문의");
    }
  };

  const onClickDelete = async (event: MouseEvent) => {
    const inputPassword = prompt("비밀번호를 입력해주세요");
    try {
      await deleteComment({
        variables: {
          boardCommentId: String(event.target.id),
          password: inputPassword,
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
      alert("댓글이 삭제되었습니다.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickUpdateView = (event: MouseEvent) => {
    setIsEdit(true);
    setUpdateId(event.target.id);
  };

  const onClickUpdate = () => {
    if (textCount > 50) return alert("댓글내용은 최대 50글자 입니다.");

    interface IUpdateCommentValue {
      contents?: string;
      rating?: number;
    }

    const updateCommentInput: IUpdateCommentValue = { rating: 5 };
    if (contents !== "") updateCommentInput.contents = contents;

    try {
      updateComment({
        variables: {
          password,
          boardCommentId: updateId,
          updateBoardCommentInput: updateCommentInput,
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
      alert("댓글 수정 완료");
      setUpdateId("");
      setIsEdit(false);
      setPassword("");
      setContents("");
      setTextCount(0);
    } catch (error) {
      console.log(error.message);
      alert("에러");
    }
  };

  return (
    <CommentGetUI
      data={data}
      addComment={addComment}
      onClickDelete={onClickDelete}
      onClickUpdateView={onClickUpdateView}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      input={[writer, password, contents]}
      isEdit={isEdit}
      updateId={updateId}
      textCount={textCount}
    />
  );
}
