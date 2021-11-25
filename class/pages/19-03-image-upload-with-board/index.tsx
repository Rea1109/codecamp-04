import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Image } from "antd";

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

export default function ImageUploadWithBoardPage() {
  const [myInfo, setMyInfo] = useState({
    writer: "",
    password: "",
    contents: "",
    title: "",
  });

  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMyInfo({
      ...myInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          ...myInfo,
          images: myImages,
        },
      },
    });
    console.log(result.data.createBoard);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일이 없습니다.");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      // 5MB
      alert("파일 크기가 너무 큽니다.(제한: 5MB)");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png 만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  };

  return (
    <>
      <h1>이미지 업로드</h1>
      작성자 <input type="text" name="writer" onChange={onChangeInput} /> <br />
      비밀번호
      <input type="password" name="password" onChange={onChangeInput} /> <br />
      제목 <input type="text" name="title" onChange={onChangeInput} /> <br />
      내용 <input type="text" name="contents" onChange={onChangeInput} /> <br />
      <button onClick={onClickSubmit}>등록하기</button>
      <input type="file" onChange={onChangeFile} />
      <Image
        width={200}
        // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        src={`https://storage.googleapis.com/${myImages}`}
      />
    </>
  );
}
