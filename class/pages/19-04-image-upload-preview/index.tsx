import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
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
    setMyImages([result.data.uploadFile.url]);
  };

  const onClickMyImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "yellowgreen",
        }}
        onClick={onClickMyImage}
      >
        이미지 선택
      </div>
      <img
        style={{ width: "150px", height: "150px", border: "1px solid gold" }}
        src={`https://storage.googleapis.com/${myImages[0]}`}
      />
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}
