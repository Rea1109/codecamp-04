import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Column = styled.div`
  width: 20%;
`;

const Row = styled.div`
  display: flex;
`;

export default function MapCheckboxPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async (e) => {
    try {
      await deleteBoard({
        variables: { number: Number(e.target.id) },
        refetchQueries: [{ query: FETCH_BOARDS }],
        // refetchQueries: [{ query: FETCH_BOARDS,variables:{id:""} }]   변수가 있다면
      });
      console.log(`${e.target.id} 삭제완료`);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
  return (
    <div>
      {data?.fetchBoards.map((el, idx) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{idx + 1}</Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
