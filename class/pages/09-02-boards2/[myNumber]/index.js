import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function ProductReadPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.myNumber) },
  });

  console.log(data);

  return (
    <>
      <div>게시글 번호 : {router.query.myNumber}</div>
      <div>작성자: {data?.fetchBoard.writer} </div>
      <div>제목: {data?.fetchBoard.title} </div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <button
        onClick={() =>
          router.push(`/09-02-boards2/${router.query.myNumber}/edit`)
        }
      >
        수정하기
      </button>
    </>
  );
}
