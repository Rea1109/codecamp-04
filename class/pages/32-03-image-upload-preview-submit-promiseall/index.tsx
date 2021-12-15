import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//       images
//     }
//   }
// `;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState(""); // 미리보기 로컬 파일 주소
  const [myFiles, setMyFiles] = useState([]); // 업로드할 파일

  const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(String(data.target?.result)); // 미리보기용 가짜주소
      setMyFiles((prev) => [...prev, file]);
    };
  };

  const onClickSubmit = async () => {
    // let myImageUrls = [];
    // 1. 파일 업로드
    if (myFiles.length) {
      // 각각 올리기 테스트
      // const start = performance.now();
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // const end = performance.now();
      // console.log(end - start);

      // // 동시에 올리기 테스트
      const start = performance.now();
      // // Promise.all([...]) 기다렸다가 한꺼번에 다 vs Promise.race([...]) : 먼저끝나거 끄냄
      await Promise.all([
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);
      // myImageUrls = result.map((el) => el.data?.uploadFile.url);

      // const result1 = await uploadFile({
      //   variables: {
      //     file: myFiles[0],
      //   },
      // });
      // myImageUrls[0] = result1.data?.uploadFile.url;

      // const result2 = await uploadFile({
      //   variables: {
      //     file: myFiles[1],
      //   },
      // });
      // myImageUrls[1] = result2.data?.uploadFile.url;

      // const result3 = await uploadFile({
      //   variables: {
      //     file: myFiles[2],
      //   },
      // });
      // myImageUrls[2] = result3.data?.uploadFile.url;
    }

    // 2. 업로드된 파일로 게시물 등록
    // const result2 = await createBoard({
    //   variables: {
    //     createBoardInput: {
    //       writer: "패파",
    //       password: "1234",
    //       title: "수업중",
    //       contents: "Promise.all 테스트중",
    //       images: [...myImageUrls],
    //     },
    //   },
    // });
    // console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} style={{ width: "500px", height: "500px" }} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
