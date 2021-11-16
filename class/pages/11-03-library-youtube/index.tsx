import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;

// const onError = () => {
//   MyYoutube = styled.div`
//     width: 500px;
//     height: 500px;
//     background-color: gray;
//   `;
// };

const onError = () => {
  alert("동영상을 찾을수 없습니다.");
};

export default function LibraryYoutubePage() {
  return (
    // 넓이 높이는 emotion 안먹음 자체에 넣어줘야함
    <MyYoutube
      // url="https://youtu.be/uNWmkBosLqI"
      url="asdfasdfasdf"
      width={500}
      height={500}
      muted={true}
      playing={true}
      controls={true}
      onError={onError}
    />
  );
}
