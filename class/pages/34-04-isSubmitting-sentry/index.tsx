import { ChangeEvent, useState } from "react";
// import { gql } from "@apollo/client";
import { Modal } from "antd";
import * as Sentry from "@sentry/nextjs";

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//     }
//   }
// `;

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setInputs] = useState(inputsInit);
  // const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInputs =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => {
        return {
          ...prev,
          [name]: event.target.value,
        };
      });
    };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      throw new Error("에러 발생");
      // const result = await createBoard({
      //   variables: {
      //     createBoardInput: { ...inputs },
      //   },
      // });
      // //   Modal.confirm({ content: "등록에 성공하였습니다." });
      // // router.push로 다이나믹 라우팅 => result.data.createBoard._id
      // console.log(result);
      // setIsSubmitting(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
      Sentry.captureException(error);
    }
  };

  return (
    <>
      작성자 : <input onChange={onChangeInputs("writer")} type="text" />
      <br />
      비밀번호 : <input onChange={onChangeInputs("password")} type="password" />
      <br />
      제목 : <input onChange={onChangeInputs("title")} type="text" />
      <br />
      내용 : <input onChange={onChangeInputs("contents")} type="text" />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        {" "}
        등록하기{" "}
      </button>
    </>
  );
}
