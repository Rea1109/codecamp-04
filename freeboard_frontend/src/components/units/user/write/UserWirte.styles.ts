import styled from "@emotion/styled";

interface IUserWriteStylesProps {
  isHidden: boolean;
}

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

export const InnerWrapper = styled.div`
  margin: 30px 0px 30px 0px;
`;

export const InputBox = styled.input`
  width: 750px;
  height: 70px;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  font-size: 20px;
  padding: 20px;
`;

export const PhoneWrapper = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
`;

export const PhoneSelect = styled.select`
  width: 150px;
  height: 70px;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  font-size: 20px;
  padding: 20px;
`;

export const PhoneInput = styled.input`
  width: 250px;
  height: 70px;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  margin-left: 30px;
  font-size: 20px;
  padding: 20px;
`;

export const Number = styled.input`
  width: 150px;
  height: 70px;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  font-size: 20px;
  padding: 20px;
`;

export const AuthBtn = styled.button`
  width: 450px;
  height: 70px;
  color: white;
  background-color: #c7bba9;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  margin-left: 50px;
  font-size: 25px;
`;

export const AuthWrapper = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
`;

export const Loaction = styled.select`
  width: 750px;
  height: 70px;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  font-size: 18px;
  padding: 20px;
`;

export const GenderWrapper = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
`;

export const Gender = styled.div`
  font-size: 25px;
  margin-right: 50px;
`;

export const AddBtn = styled.button`
  width: 750px;
  height: 70px;
  color: white;
  background-color: #c7bba9;
  border: 2px solid #c7bba9;
  border-radius: 5px;
  font-size: 25px;
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

export const Error = styled.div`
  color: red;
  font-size: 16px;
  visibility: ${(props: IUserWriteStylesProps) =>
    props.isHidden ? "hidden" : "visible"};
`;
