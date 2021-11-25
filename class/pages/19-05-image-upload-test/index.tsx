import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function TestPage() {
  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });

    console.log(result.data.uploadFile.url);
    setMyImages((prev) => [...prev, result.data.uploadFile.url]);
  };

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  const handleImgError = (event) => {
    event.taget.src = "/images/background-1.jpg";
  };

  const test = () => {
    console.log(myImages);
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "1px solid gold",
          marginRight: "20px",
        }}
        onClick={onClickMyImage}
      >
        이미지 선택
      </div>
      {myImages.map((el) => (
        <img
          key={el}
          style={{
            width: "150px",
            height: "150px",
            border: "1px solid gold",
            marginRight: "20px",
          }}
          src={`https://storage.googleapis.com/${el}`}
          onError={handleImgError}
        />
      ))}
      <button style={{ height: "52px" }} onClick={test}>
        myImages 확인하기
      </button>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </div>
  );
}
