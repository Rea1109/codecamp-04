import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfbfb;
`;

export const BoardWrapper = styled.div`
  width: 1200px;
  padding: 100px 100px 50px 100px;
  box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const HeadWrapper = styled.div`
  padding-bottom: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const Profile = styled.div`
  display: flex;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LikeWrapper = styled.div`
  margin-bottom: 30px;
  padding-left: 300px;
  padding-right: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin: 30px 0px 30px 0px;
  font-size: 36px;
  font-weight: bold;
`;

export const ContentImg = styled.div`
  margin-bottom: 30px;
`;
export const Img = styled.img`
  width: 996px;
  height: 480px;
`;

export const Content = styled.div`
  width: 996px;
  font-size: 16px;
  margin-bottom: 80px;
`;
export const ContentVideo = styled.div`
  margin-bottom: 80px;
`;

export const Video = styled(ReactPlayer)``;

export const VideoAlt = styled.div`
  width: 486px;
  height: 270px;
  background-color: #bdbdbd;
  text-align: center;
  line-height: 270px;
  color: white;
  font-size: 42px;
  font-weight: bolder;
  border-radius: 15px;
`;

export const Maintext = styled.div`
  font-size: 24px;
`;

export const Subtext = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const Text = styled.div`
  font-size: 16px;
`;

export const HeadMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 150px;
`;

export const PhotoIcon = styled.img`
  width: 46.67px;
  height: 46.67px;
  margin-right: 20px;
`;

export const AddFileIcon = styled.img`
  width: 26.67px;
  height: 13.33px;
  margin-right: 20px;
`;

export const AddrIcon = styled.img`
  width: 30px;
  height: 26.67px;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LikeImg = styled.img`
  width: 22px;
  height: 20px;
  margin-left: 8px;
  margin-bottom: 10px;
`;

export const LikeCount = styled.div`
  font-size: 18px;
  color: #ffd600;
  text-align: center;
`;

export const DisLikeCount = styled.div`
  font-size: 18px;
  color: #828282;
  text-align: center;
`;

export const MenuWrapper = styled.div`
  width: 1200px;
  padding: 100px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.input`
  width: 179px;
  height: 52px;
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  background-color: #c7bba9;
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;
