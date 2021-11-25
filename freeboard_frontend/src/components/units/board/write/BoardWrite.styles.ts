import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  width: 1200px;
  /* margin: 100px 100px 200px 250px; */
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-size: 36px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 70px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
export const Writer = styled.div``;

export const Label = styled.div`
  font-size: 16px;
  margin-right: 20px;
  margin-bottom: 15px;
`;

export const InputBox1 = styled.input`
  width: 1000px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const AddrBox = styled.input`
  width: 1000px;
  height: 52px;
  margin-top: 15px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const InputBox2 = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const TextAreaBox = styled.textarea`
  width: 1000px;
  height: 480px;
  resize: none;
  padding-top: 20px;
  padding-left: 20px;
  border: 1px solid #bdbdbd;
`;

export const Post = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 15px;
  text-align: center;
  border: 1px solid #bdbdbd;
`;
export const PostBtn = styled.input`
  width: 124px;
  height: 52px;
  text-align: center;
  border: 1px solid #bdbdbd;
  color: white;
  background-color: #000000;
`;
export const Addr = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AddImgBox = styled.img`
  width: 78px;
  height: 78px;
  background-color: white;
  border: 1px solid white;
  margin-right: 20px;
  text-align: center;
  line-height: 78px;
  padding: 20px;
`;
export const ImgBox = styled.img`
  width: 78px;
  height: 78px;
  border: 2px solid #c6bba8;
  margin-right: 20px;
  text-align: center;
  line-height: 78px;
`;

export const SettingWrapper = styled.div`
  display: flex;
`;

export const Setting = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const Radio = styled.input`
  margin-right: 10px;
  margin-top: 8px;
`;

export const BoardFunction = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 300px 0px 300px;
  justify-content: space-evenly;
`;

export const ConfirmButton = styled.button`
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

export const CancleButton = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 20px;
  border: none;
  border-radius: 10px;
  background-color: #bdbdbd;
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;

export const ErrorText = styled.div`
  color: red;
`;
