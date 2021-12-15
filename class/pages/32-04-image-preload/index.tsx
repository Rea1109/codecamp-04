import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [myLoadedImage, setMyLoadedImage] = useState();
  const divRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLoadedImage(img); // img : 태그임, 태그를 스테이트에 넣어준거임
    };
  }, []);

  const onClickButton = () => {
    divRef.current?.appendChild(myLoadedImage);
  };

  return (
    <>
      <h1>안녕하세요</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
      {/* <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> */}
    </>
  );
}
