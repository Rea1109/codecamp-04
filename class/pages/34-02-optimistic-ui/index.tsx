import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "61baae2d717be5002baa754a" } }
  );

  const onClickOptimisticUi = () => {
    // 좋아요 증가 mutation
    likeBoard({
      variables: { boardId: "61baae2d717be5002baa754a" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "61baae2d717be5002baa754a" },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: data?.fetchBoard.likeCount || 0 + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61baae2d717be5002baa754a" },
          data: {
            fetchBoard: {
              _id: "61baae2d717be5002baa754a", // apollo rule
              __typename: "Board", // apollo rule
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요 갯수 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 버튼</button>
    </>
  );
}
