import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import CommentGetUI from "./CommentGet.presenter";
import {
  FETCH_BOARD_COMMENTS,
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./CommentGet.queries";

export default function CommentPage() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) =>
    setWriter(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContents(event.target.value);

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const addComment = async () => {
    if (!writer) return alert("작성자를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    if (!contents) return alert("댓글을 작성해주세요.");

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
    } catch (error: any) {
      console.log(error.message);
      alert("서버에러 관리자에게 문의");
    }
  };

  const onClickDelete = async (event: MouseEvent) => {
    setPassword(String(prompt("비밀번호를 입력해주세요.")));
    try {
      await deleteComment({
        variables: {
          boardCommentId: String(event.target.id),
          password,
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
      setPassword("");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <CommentGetUI
      data={data}
      addComment={addComment}
      onClickDelete={onClickDelete}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      input={[writer, password, contents]}
    />
  );
}
