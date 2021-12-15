import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event: any) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target?.result);
      setImageUrl(data.target?.result);
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} style={{ width: "500px", height: "500px" }} />
    </>
  );
}
