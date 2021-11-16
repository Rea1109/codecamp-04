import styled from "@emotion/styled";
import ReactPlayer from "react-player";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;

export default function LibraryYoutubePage() {
  return (
    // 넓이 높이는 emotion 안먹음 자체에 넣어줘야함
    <MyYoutube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={200}
      height={200}
    />
  );
}
