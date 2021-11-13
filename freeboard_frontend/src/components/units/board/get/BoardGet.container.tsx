import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardGet.queries";
import BoardGetUI from "./BoardGet.presenter";
import { MouseEvent, useState } from "react";
import { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardGet() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);

  const { data } = useQuery<Pick<IQuery,'fetchBoard'>,IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const [deleteBoard] = useMutation<Pick<IMutation,'deleteBoard'>,IMutationDeleteBoardArgs>(DELETE_BOARD);
  const [likeBoard] = useMutation<Pick<IMutation,'likeBoard'>,IMutationLikeBoardArgs>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation,'dislikeBoard'>,IMutationDislikeBoardArgs>(DISLIKE_BOARD);

  const onClickLike = async (e: MouseEvent) => {
    try {
      await likeBoard({
        variables: { boardId: e.target.id },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: e.target.id } },
        ],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onClickDislike = async (e: MouseEvent) => {
    try {
      await dislikeBoard({
        variables: { boardId: e.target.id },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: e.target.id } },
        ],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onClickDelete = async (e: MouseEvent<HTMLInputElement>) => {
    try {
      await deleteBoard({ variables: { boardId: e.target.id } });
      alert("게시물이 삭제되었습니다.");
      router.push(`/boards`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onModal = () => {
    isModal ? setIsModal(false) : setIsModal(true);
  };
  return (
    <BoardGetUI
      data={data}
      isModal={isModal}
      onClickList={() => router.push(`/boards`)}
      onClickUpdate={() => router.push(`/boards/${router.query.boardId}/edit`)}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onModal={onModal}
    />
  );
}
