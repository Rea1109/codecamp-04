import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickSubmit = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "테스",
          password: "1234",
          title: "테스형",
          contents: "테스형",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [...prev, data.createBoard]; // 기존10개 추가 1개와 합쳐 돌려주기
            },
          },
        });
      },
    });
  };

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 기존 10개에서 방금 삭제한 id 제외한 9개 만들기
              // 만들어진 새로운 fetchBoards 데이터를 돌려주기
              const newFetchBoards = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              ); // 기존10개
              return [...newFetchBoards];
              // return 변화될 데이터 - fetchBoards
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
