import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      message
      number
    }
  }
`;

export default function GraphqlMutationBoard3Page() {
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeMyInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  };

  const graphqlApi = async () => {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  return (
    <div>
      작성자 : <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목 : <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      내용 : <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={graphqlApi}>게시물 등록하기 !</button>
    </div>
  );
}
