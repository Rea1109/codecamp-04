import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfbfb;
`;

export const CommentWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Head = styled.div`
  font-size: 18px;
  display: flex;
  margin-bottom: 50px;
`;

export const HeadImg = styled.img`
  margin-right: 20px;
  padding-top: 8px;
  width: 28px;
  height: 34px;
`;

export const HeadLable = styled.div`
  font-family: "mainFont";
  font-size: 25px;
`;

export const CommnetWriter = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InfoInput = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid #c7bba9;
  border-radius: 5px;
  margin-right: 30px;
`;

export const CommentContent = styled.div`
  border: 1px solid #c7bba9;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
`;

export const Content = styled.textarea`
  width: 1190px;
  height: 117px;
  resize: none;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 0px;
  border: none;
  font-size: 16px;
`;

export const CommentContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const TextCount = styled.div`
  font-size: 16px;
  margin-left: 5px;
  padding-top: 30px;
  color: #bdbdbd;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const AddBtn = styled.button`
  width: 90px;
  height: 32px;
  font-size: 14px;
  color: white;
  border: 1px solid #c7bba9;
  border-radius: 5px;
  background-color: #c7bba9;
`;

export const CancleBtn = styled.button`
  width: 90px;
  height: 32px;
  font-size: 14px;
  font-weight: bolder;
  color: white;
  border: 1px solid #c7bba9;
  border-radius: 5px;
  background-color: #bdbdbd;
`;

export const UpdateBtn = styled.button`
  width: 90px;
  height: 32px;
  font-size: 14px;
  color: white;
  margin-left: 10px;
  border: 1px solid #c7bba9;
  border-radius: 5px;
  background-color: #c7bba9;
`;

export const CommentList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Comment = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WriterImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const CommentInner = styled.div``;

export const CommentHead = styled.div`
  display: flex;
`;

export const CommnetWriterLabel = styled.div`
  margin-right: 15px;
  font-size: 16px;
  color: black;
`;

export const CommentBody = styled.div`
  margin: 10px 0px 10px 0px;
  font-size: 16px;
  color: #4f4f4f;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  margin: 30px 0px 20px 0px;
`;

export const CommnetMenu = styled.div`
  display: flex;
`;

export const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  padding-bottom: 30px;
`;

export const MenuImg = styled.img`
  margin-left: 5px;
  margin-bottom: 50px;
`;

export const Star = styled.img`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

export const ModalInput = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;
