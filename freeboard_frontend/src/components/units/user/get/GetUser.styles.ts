import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 50px 0px;
`;

export const FromWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 80px;
  font-family: "mainFont";
  display: flex;
`;

export const Logo = styled.div`
  color: #ffd600;
  margin-right: 20px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 60px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

export const ProfileName = styled.div`
  font-size: 40px;
  font-weight: bolder;
`;

export const ProfileEmail = styled.div`
  font-size: 30px;
`;

export const FunctionBtn = styled.button`
  font-size: 18px;
  margin-right: 30px;
  margin-left: 30px;
  border: none;
  border-radius: 10px;
  background-color: #c7bba9;
  color: white;
  width: 150px;
  height: 35px;
`;
