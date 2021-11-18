import styled from "@emotion/styled";

export const Header = styled.div`
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const Label = styled.div`
  font-size: 40px;
  font-family: "mainFont";
  display: flex;
`;

export const Logo = styled.div`
  color: #ffd600; ;
`;

export const BtnWrapper = styled.div``;

export const SigninBtn = styled.button`
  width: 100px;
  height: 52px;
  margin-top: 10px;
  margin-left: 15px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: bolder;
`;

export const SignupBtn = styled.button`
  width: 100px;
  height: 52px;
  margin-left: 15px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: #c7bba9;
  color: white;
`;

export const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  margin: 20px;
`;

export const InputBox = styled.input`
  width: 180px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid #c7bba9;
  padding-left: 20px;
`;

export const SelectBox = styled.select`
  width: 180px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid #c7bba9;
  text-align: center;
  color: #c7bba9;
`;

export const AddBtn = styled.button`
  width: 100px;
  height: 36px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  background-color: #c7bba9;
  color: white;
`;

export const SignInInput = styled.input`
  width: 350px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid #c7bba9;
  padding-left: 20px;
  margin-bottom: 20px;
`;
