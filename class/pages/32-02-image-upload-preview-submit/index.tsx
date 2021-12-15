import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState(""); // 미리보기 로컬 파일 주소
  const [myFile, setMyFile] = useState(""); // 업로드할 파일

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result); // 미리보기용 가짜주소
      setMyFile(file);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrl = "";
    // 1. 파일 업로드
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url;
    }

    // 2. 업로드된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "패파",
          password: "1234",
          title: "수업중",
          contents: "수업중 입니다.",
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} style={{ width: "500px", height: "500px" }} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
