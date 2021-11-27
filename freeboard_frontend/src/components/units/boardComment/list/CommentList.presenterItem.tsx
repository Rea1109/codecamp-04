import * as S from "../write/CommentWrite.styles";
import { Rate, Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import CommentWrite from "../write/CommentWrite.container";

interface ICommentListUIItem {
  el: any;
}

export default function CommentListUIItem(props: ICommentListUIItem) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  let inputPassword = "";

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => setIsEdit(true);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    inputPassword = e.target.value;
  };

  const onClickDelete = () => {
    Modal.info({
      title: "비밀번호를 입력해주세요",
      content: <S.ModalInput type="password" onChange={onChangePassword} />,
      onOk() {
        deleteBoardComment();
      },
    });
  };

  const deleteBoardComment = async () => {
    try {
      await deleteComment({
        variables: {
          boardCommentId: props.el._id,
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
      Modal.success({ title: "댓글이 삭제 되었습니다." });
    } catch (error: any) {
      Modal.error({ title: error.message });
    }
  };

  return (
    <>
      {!isEdit && (
        <S.CommentList>
          <S.Comment>
            <S.WriterImg src="/images/board/profile.png" />
            <S.CommentInner>
              <S.CommentHead>
                <S.CommnetWriterLabel>{props.el.writer}</S.CommnetWriterLabel>
                <Rate
                  value={props.el.rating}
                  style={{ fontSize: "15px" }}
                  disabled
                />
              </S.CommentHead>
              <S.CommentBody>{props.el.contents}</S.CommentBody>
              <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
            </S.CommentInner>
          </S.Comment>
          <S.CommnetMenu>
            <S.MenuBtn>
              <S.MenuImg src="/images/board/pen.png" onClick={onClickUpdate} />
            </S.MenuBtn>
            <S.MenuBtn>
              <S.MenuImg
                src="/images/board/delete.png"
                onClick={onClickDelete}
              />
            </S.MenuBtn>
          </S.CommnetMenu>
        </S.CommentList>
      )}
      {isEdit && (
        <CommentWrite isEdit={isEdit} setEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
